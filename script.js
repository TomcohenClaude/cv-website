// Terminal typing effect
document.addEventListener('DOMContentLoaded', function() {
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
