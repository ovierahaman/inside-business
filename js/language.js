function switchLanguage(language) {
    const englishBtn = document.getElementById('english-btn');
    const banglaBtn = document.getElementById('bangla-btn');

    if (language === 'en') {
        englishBtn.classList.add('active');
        banglaBtn.classList.remove('active');
        // Add logic to switch the content to English
    } else if (language === 'bn') {
        banglaBtn.classList.add('active');
        englishBtn.classList.remove('active');
        // Add logic to switch the content to Bangla
    }
}
