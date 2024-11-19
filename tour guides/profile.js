document.querySelectorAll('.guide-languages select').forEach(select => {
    select.addEventListener('change', function () {
        const selectedLanguage = this.value;
        console.log("Language selected:", selectedLanguage);
    });
});