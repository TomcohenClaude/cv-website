// OS Mode Management
function initOSMode() {
    // Load saved preference or default to Mac
    const savedOS = localStorage.getItem('preferredOS') || 'mac';
    setOSMode(savedOS, false);

    // Add click handlers to OS toggle buttons
    const osButtons = document.querySelectorAll('.os-btn');
    osButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const os = this.getAttribute('data-os');
            setOSMode(os, true);
            localStorage.setItem('preferredOS', os);
        });
    });
}

function setOSMode(os, animate = true) {
    // Update button states
    document.querySelectorAll('.os-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-os') === os);
    });

    // Update body class
    if (os === 'windows') {
        document.body.classList.add('windows-mode');
    } else {
        document.body.classList.remove('windows-mode');
    }

    // Update all prompts and commands
    const prompts = document.querySelectorAll('.prompt');
    const commands = document.querySelectorAll('.command:not(.blink)');

    prompts.forEach(prompt => {
        const macText = prompt.getAttribute('data-mac');
        const winText = prompt.getAttribute('data-win');
        if (macText && winText) {
            prompt.textContent = os === 'windows' ? winText : macText;
        }
    });

    commands.forEach(command => {
        const macText = command.getAttribute('data-mac');
        const winText = command.getAttribute('data-win');
        if (macText && winText) {
            command.textContent = os === 'windows' ? winText : macText;
        }
    });

    // Add transition effect if animating
    if (animate) {
        const terminalBody = document.querySelector('.terminal-body');
        terminalBody.style.opacity = '0';
        setTimeout(() => {
            terminalBody.style.transition = 'opacity 0.3s ease';
            terminalBody.style.opacity = '1';
        }, 50);
    }
}

// Terminal typing effect
document.addEventListener('DOMContentLoaded', function() {
    // Initialize OS mode
    initOSMode();

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add click handlers for links
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        const text = link.textContent.trim();

        // Make email clickable
        if (text.includes('@') && text.includes('.com')) {
            link.style.cursor = 'pointer';
            link.addEventListener('click', function() {
                window.location.href = 'mailto:' + text;
            });
        }
        // Make LinkedIn clickable
        else if (text.includes('linkedin.com')) {
            link.style.cursor = 'pointer';
            link.addEventListener('click', function() {
                window.open('https://www.' + text, '_blank');
            });
        }
    });

    // Optional: Add typing effect to the first command
    const firstCommand = document.querySelector('.command');
    if (firstCommand) {
        const originalText = firstCommand.textContent;
        firstCommand.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < originalText.length) {
                firstCommand.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        }

        // Start typing effect after a short delay
        setTimeout(typeWriter, 300);
    }

    // Matrix rain effect removed for cleaner, professional look
});

// Matrix rain effect removed for professional aesthetic

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to clear (just a visual effect)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Clear shortcut pressed');
        // You could add clear animation here
    }
});

// Add easter egg: Konami code
(function() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        // Add rainbow effect to terminal
        const terminal = document.querySelector('.terminal-container');
        terminal.style.animation = 'rainbow 2s linear infinite';

        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            terminal.style.animation = '';
        }, 5000);

        console.log('🎮 Konami Code activated! 🎮');
    }
})();

// Smooth scrolling for sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Add performance monitoring (optional)
if (window.performance) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}
