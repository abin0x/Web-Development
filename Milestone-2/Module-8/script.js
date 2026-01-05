/**
 * Professional Theme Engine
 * Developed for High-Performance Portfolios
 */

// 1. Select DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon'); // আইকন এলিমেন্ট
const htmlElement = document.documentElement;

/**
 * ২. ইনিশিয়ালাইজ থিম
 * LocalStorage চেক করবে, না থাকলে সিস্টেম সেটিংস চেক করবে
 */
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    const initialTheme = savedTheme || systemTheme;
    
    applyTheme(initialTheme);
};

/**
 * ৩. থিম অ্যাপ্লাই ফাংশন
 */
const applyTheme = (theme) => {
    // HTML-এ data-theme অ্যাট্রিবিউট সেট করা (CSS Variables-এর জন্য)
    htmlElement.setAttribute('data-theme', theme);
    
    // আইকন আপডেট করা
    if (theme === 'dark') {
        themeToggle.innerHTML = '☀️'; // সূর্য আইকন
    } else {
        themeToggle.innerHTML = '🌙'; // চাঁদ আইকন
    }
    
    // ভবিষ্যতে ব্যবহারের জন্য লোকাল স্টোরেজে সেভ করা
    localStorage.setItem('theme', theme);
};

/**
 * ৪. ইভেন্ট লিসেনার
 */
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // স্মুথ ট্রানজিশনের জন্য একটি ক্লাস যোগ করা যেতে পারে (ঐচ্ছিক)
    applyTheme(newTheme);
});

/**
 * ৫. সিস্টেম সেটিং চেঞ্জ হলে অটোমেটিক থিম আপডেট
 */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) { // যদি ইউজার ম্যানুয়ালি কিছু সেট না করে থাকে
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// ইঞ্জিন রান করা
initializeTheme();