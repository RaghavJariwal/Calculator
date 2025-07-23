// Calculator functions
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function backspace() {
    const display = document.getElementById('display');
    if (display.textContent.length === 1) {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function calculate() {
    try {
        const display = document.getElementById('display');
        let expression = display.textContent.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(expression);
        display.textContent = result.toString();
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                 (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    }
});

// Blogger-specific adjustments
if (window.location.hostname.includes('blogger.com')){
    const container = document.querySelector('.calculator-container');
    container.style.margin = '0 auto';
    container.style.maxWidth = '320px';
}
