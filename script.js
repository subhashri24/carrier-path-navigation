// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjusting scroll position for better visibility
            behavior: 'smooth'
        });
    });
});

// Career Assessment Function (Example)
function assessCareer() {
    const interest = document.querySelector('input[name="interest"]:checked');
    const skills = document.querySelector('input[name="skills"]:checked');
    const results = document.getElementById('assessment-results');

    if (!interest || !skills) {
        alert('Please select your interests and skills!');
        return;
    }

    let careerPath = '';

    // Example logic for career suggestion based on assessment choices
    if (interest.value === 'tech' && skills.value === 'coding') {
        careerPath = 'Software Developer';
    } else if (interest.value === 'science' && skills.value === 'research') {
        careerPath = 'Research Scientist';
    } else if (interest.value ==='strategic thinking' && skills.value === 'project management') {
        careerPath = 'Business and Management'; 
    } else if (interest.value === 'creativity,culture' && skills.value === 'design,critical thinking,research') {
        careerPath = 'Arts and Humanities'; 
    }else if (interest.value === 'tech' && skills.value === 'research') {
        careerPath = 'AI Research Scientist,ML Engineer'; 
    }else if (interest.value === 'science' && skills.value === 'coding') {
        careerPath = 'Bioinformatics specialist,Quantum Computing Researcher'; 
    }else if (interest.value === 'tech' && skills.value === 'project management') {
        careerPath = 'Technical Project Manager,IT project Manager';
    }else if (interest.value === 'strategic thinking' && skills.value === 'design,critical thinking,research') {
        careerPath = 'Data Analyst,UI/UX Design';
    } else {
        careerPath = 'Career Advisor Needed!';
    }

    results.innerHTML = `<p>Based on your assessment, we suggest the following career path: <strong>${careerPath}</strong></p>`;
}

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        return;
    }

    alert('Thank you for your message. We will get back to you shortly!');
    this.reset(); // Reset the form after submission
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbot = document.getElementById("chatbot");
const closeChatbot = document.getElementById("close-chatbot");
const chatbotForm = document.getElementById("chatbot-form");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");

chatbotToggle.addEventListener("click", () => {
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
});

closeChatbot.addEventListener("click", () => {
    chatbot.style.display = "none";
});

chatbotForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userMessage = chatbotInput.value;
    if (!userMessage) return;

    // Display user message
    const userMessageElement = document.createElement("div");
    userMessageElement.textContent = `You: ${userMessage}`;
    chatbotMessages.appendChild(userMessageElement);

    // Simulate bot response
    const botMessageElement = document.createElement("div");
    botMessageElement.textContent = "Bot: Let me find that information for you!";
    chatbotMessages.appendChild(botMessageElement);

    chatbotInput.value = "";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // (Optional) Send the message to a backend or API
    // Example: fetch('/chatbot', { method: 'POST', body: JSON.stringify({ message: userMessage }) });
});

chatbotForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userMessage = chatbotInput.value;
    if (!userMessage) return;

    // Display user message
    const userMessageElement = document.createElement("div");
    userMessageElement.textContent = `You: ${userMessage}`;
    chatbotMessages.appendChild(userMessageElement);

    // Fetch response from backend
    const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
    });
    const data = await response.json();

    // Display bot message
    const botMessageElement = document.createElement("div");
    botMessageElement.textContent = `Bot: ${data.reply}`;
    chatbotMessages.appendChild(botMessageElement);

    chatbotInput.value = "";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
});

// Check if user is registered
document.addEventListener('DOMContentLoaded', () => {
    const isRegistered = localStorage.getItem('isRegistered');
    if (!isRegistered) {
        window.location.href = 'register.html'; // Redirect to sign-in if not registered
    }
});

// Register User
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Save user data locally (for demonstration; use a database in production)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('isRegistered', true);

        alert('Registration successful! Redirecting to login...');
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
}

// Login User
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful! Redirecting to home page...');
        window.location.href = 'index.html'; // Redirect to home
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const isRegistered = localStorage.getItem('isRegistered');
    if (!isRegistered) {
        window.location.href = 'register.html'; // Redirect to register page
    }
});

function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Save user data locally (for demonstration; use a database in production)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('isRegistered', true); // Mark user as registered

        alert('Registration successful! Redirecting to login...');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Please fill in all fields.');
    }
}
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful! Redirecting to home page...');
        window.location.href = 'index.html'; // Redirect to home
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

fetch('http://127.0.0.1:5500/')
  .then(response => response.text())
  .then(data => console.log(data));
