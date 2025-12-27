// Initialize Icons
lucide.createIcons();

// Elements
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobile-overlay'); // If you add this div back to HTML
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// --- Theme Logic ---
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

if(themeToggle){
    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            html.classList.add('dark');
            localStorage.theme = 'dark';
        }
    });
}

// --- Mobile Menu Logic ---
if(menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if(isClosed) {
            sidebar.classList.remove('-translate-x-full');
        } else {
            sidebar.classList.add('-translate-x-full');
        }
    });
}