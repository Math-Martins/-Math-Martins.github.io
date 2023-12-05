function applyTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    $('body').toggleClass('theme-light', theme === 'light');
    updateStyles(theme);
}

function updateStyles(theme) {
    if (theme === 'light') {
        $('body').css('background-color', '#FAEED1');
        $('p').css('color', '#000000'); 
    } else {
        $('body').css('background-color', '#092635');
        $('p').css('color', 'aliceblue'); 
    }
}

function toggleTheme() {
    const currentTheme = $('body').hasClass('theme-light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme);

    applyTheme();
}

$(document).ready(function() {
    applyTheme(); 

    $('#themeToggleBtn').on('click', function() {
        toggleTheme();
    });

    $('.img-jquery-ui').draggable({
        containment: 'body', 
        cursor: 'grabbing', 
        revert: true, 
        zIndex: 100 
    });
});
