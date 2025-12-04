/**
 * ScholarMatch - Main Application JavaScript
 * Handles interactivity, chatbot, and user interactions
 */

// ============================================
// Configuration & Constants
// ============================================

const CONFIG = {
    chatbotAnimationDelay: 500,
    maxChatMessages: 50,
};

// Sample chatbot responses for demo purposes
const CHATBOT_RESPONSES = {
    greeting: "Hi! 👋 I'm your ScholarMatch AI Assistant. Ask me anything about scholarships!",
    eligibility: "Eligibility requirements vary by scholarship, but common ones include GPA, income level, field of study, and essay submission. Tell me more about your background!",
    application: "Great question! Most scholarships require: transcripts, essays, recommendation letters, and sometimes a FAFSA form. I can help you prepare!",
    deadlines: "Scholarship deadlines vary—some are rolling (ongoing), while others have specific dates. The earlier you apply, the better your chances!",
    firstgen: "First-gen students often qualify for special scholarships! Many organizations offer support specifically for students whose parents didn't attend college.",
    income: "Many scholarships are need-based and support low-income students. Some are merit-based (grades/achievements). We can find both!",
    default: "That's a great question! For more specific help, try exploring our scholarship finder to see personalized recommendations.",
};

// ============================================
// DOM Elements
// ============================================

const elements = {
    navbarToggle: document.getElementById('navbar-toggle'),
    navMenu: document.getElementById('nav-menu'),
    launchAssistant: document.getElementById('launch-assistant'),
    chatbotLauncher: document.getElementById('chatbot-launcher'),
    chatbotSection: document.getElementById('chatbot'),
    chatbotMessages: document.getElementById('chatbot-messages'),
    chatbotInput: document.getElementById('chatbot-input'),
    sendMessage: document.getElementById('send-message'),
    ctaButton: document.getElementById('cta-button'),
};

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    console.log('ScholarMatch application initialized');
});

/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
    // Navigation
    if (elements.navbarToggle) {
        elements.navbarToggle.addEventListener('click', toggleNavMenu);
    }

    // Chatbot
    if (elements.launchAssistant) {
        elements.launchAssistant.addEventListener('click', launchChatbot);
    }

    if (elements.chatbotLauncher) {
        elements.chatbotLauncher.addEventListener('click', toggleChatbot);
    }

    if (elements.sendMessage) {
        elements.sendMessage.addEventListener('click', sendChatMessage);
        elements.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }

    if (elements.ctaButton) {
        elements.ctaButton.addEventListener('click', launchChatbot);
    }

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navbar = document.querySelector('.navbar-container');
        if (!navbar.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

// ============================================
// Navigation Functions
// ============================================

/**
 * Toggle mobile navigation menu
 */
function toggleNavMenu() {
    const isExpanded = elements.navbarToggle.getAttribute('aria-expanded') === 'true';
    elements.navbarToggle.setAttribute('aria-expanded', !isExpanded);
    elements.navMenu.classList.toggle('active');
}

/**
 * Close mobile navigation menu
 */
function closeMobileMenu() {
    elements.navbarToggle.setAttribute('aria-expanded', 'false');
    elements.navMenu.classList.remove('active');
}

// ============================================
// Chatbot Functions
// ============================================

/**
 * Launch the chatbot by scrolling to it
 */
function launchChatbot() {
    elements.chatbotSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
        elements.chatbotInput.focus();
    }, 500);
}

/**
 * Toggle chatbot visibility
 */
function toggleChatbot() {
    const isExpanded = elements.chatbotLauncher.getAttribute('aria-expanded') === 'true';
    elements.chatbotLauncher.setAttribute('aria-expanded', !isExpanded);
    elements.chatbotLauncher.classList.toggle('expanded');

    if (!isExpanded) {
        launchChatbot();
    }
}

/**
 * Send a message in the chatbot
 */
function sendChatMessage() {
    const message = elements.chatbotInput.value.trim();

    if (!message) {
        return;
    }

    // Add user message to chat
    addMessageToChat(message, 'user');

    // Clear input
    elements.chatbotInput.value = '';
    elements.chatbotInput.focus();

    // Simulate bot response with delay
    showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        const botResponse = generateBotResponse(message);
        addMessageToChat(botResponse, 'bot');
    }, CONFIG.chatbotAnimationDelay);

    // Prevent excessive messages
    const messageCount = document.querySelectorAll('.message').length;
    if (messageCount > CONFIG.maxChatMessages) {
        removeOldestMessage();
    }
}

/**
 * Add a message to the chatbot conversation
 * @param {string} text - The message text
 * @param {string} sender - 'user' or 'bot'
 */
function addMessageToChat(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.setAttribute('role', 'article');

    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = text;

    messageDiv.appendChild(messageParagraph);
    elements.chatbotMessages.appendChild(messageDiv);

    // Scroll to bottom
    elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

/**
 * Show typing indicator
 */
function showTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message typing-indicator';
    messageDiv.id = 'typing-indicator';
    messageDiv.setAttribute('aria-hidden', 'true');

    const messageParagraph = document.createElement('p');
    messageParagraph.innerHTML = '<span></span><span></span><span></span>';
    messageParagraph.style.cssText = 'display: flex; gap: 4px;';
    messageParagraph.querySelector('span').style.cssText = `
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #6B7280;
        border-radius: 50%;
        animation: bounce 1.4s infinite;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 80%, 100% { opacity: 0.5; transform: scale(0.8); }
            40% { opacity: 1; transform: scale(1); }
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
    `;
    document.head.appendChild(style);

    messageDiv.appendChild(messageParagraph);
    elements.chatbotMessages.appendChild(messageDiv);

    // Scroll to bottom
    elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

/**
 * Remove typing indicator
 */
function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

/**
 * Remove the oldest message when max is exceeded
 */
function removeOldestMessage() {
    const messages = document.querySelectorAll('.message');
    if (messages.length > 1) {
        messages[0].remove();
    }
}

/**
 * Generate a bot response based on user input
 * @param {string} userMessage - The user's message
 * @returns {string} The bot's response
 */
function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Simple keyword matching for demo
    if (
        lowerMessage.includes('hello') ||
        lowerMessage.includes('hi') ||
        lowerMessage.includes('hey')
    ) {
        return CHATBOT_RESPONSES.greeting;
    }

    if (
        lowerMessage.includes('eligible') ||
        lowerMessage.includes('qualify') ||
        lowerMessage.includes('requirements')
    ) {
        return CHATBOT_RESPONSES.eligibility;
    }

    if (
        lowerMessage.includes('apply') ||
        lowerMessage.includes('application') ||
        lowerMessage.includes('needed')
    ) {
        return CHATBOT_RESPONSES.application;
    }

    if (
        lowerMessage.includes('deadline') ||
        lowerMessage.includes('when') ||
        lowerMessage.includes('date')
    ) {
        return CHATBOT_RESPONSES.deadlines;
    }

    if (
        lowerMessage.includes('first-gen') ||
        lowerMessage.includes('first gen') ||
        lowerMessage.includes('parents')
    ) {
        return CHATBOT_RESPONSES.firstgen;
    }

    if (
        lowerMessage.includes('income') ||
        lowerMessage.includes('poor') ||
        lowerMessage.includes('financial')
    ) {
        return CHATBOT_RESPONSES.income;
    }

    return CHATBOT_RESPONSES.default;
}

// ============================================
// Accessibility Features
// ============================================

/**
 * Set up keyboard navigation and focus management
 */
function setupAccessibility() {
    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('button, a, input');

    interactiveElements.forEach((element) => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
    });
}

// ============================================
// Smooth Scroll Enhancement
// ============================================

/**
 * Handle smooth scroll to sections
 */
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================================
// Performance & Loading States
// ============================================

/**
 * Add loading animation to buttons
 */
function addLoadingState(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.classList.add('loading');
    button.textContent = 'Loading...';

    return () => {
        button.disabled = false;
        button.classList.remove('loading');
        button.textContent = originalText;
    };
}

// ============================================
// Utility Functions
// ============================================

/**
 * Log analytics event (placeholder for future integration)
 * @param {string} eventName - The name of the event
 * @param {object} eventData - Additional event data
 */
function logEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Future: Send to analytics service
}

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} Whether the email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Debounce function for performance optimization
 * @param {function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {function} Debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// ============================================
// Future Expansion Points
// ============================================

/**
 * TODO: Integrate with real scholarship database API
 * TODO: Implement user authentication
 * TODO: Add scholarship filters and advanced search
 * TODO: Implement real AI/chatbot backend (e.g., OpenAI API)
 * TODO: Add user preferences and saved scholarships
 * TODO: Implement analytics tracking
 * TODO: Add PWA functionality for offline support
 */

// Log that the application is ready
console.log('ScholarMatch ready for expansion. Future features: Real API integration, User auth, Advanced filters, AI backend.');
