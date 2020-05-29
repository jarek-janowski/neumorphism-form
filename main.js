const darkTheme = document.querySelector('.dark-theme--js');
const root = document.documentElement;


let darkMode = false;

darkTheme.addEventListener('click', () => {
    if (darkMode) {
        root.style.setProperty('--color', '#48A9A6');
        root.style.setProperty('--placeholder-color', '#bbb');
        root.style.setProperty('--body-background', '#d2d2d2');
        root.style.setProperty('--main-background', '#eee');
        root.style.setProperty('--neumorphism', '-12px -12px 12px 0 rgba(255, 255, 255, .3), 12px 12px 12px 0 rgba(0, 0, 0, .07)');
        root.style.setProperty('--neumorphism__inset', 'inset -12px -12px 12px 0 rgba(255, 255, 255, .3), inset 12px 12px 12px 0 rgba(0, 0, 0, .07)');
        darkMode = false;
    } else {
        root.style.setProperty('--color', '#fff');
        root.style.setProperty('--placeholder-color', '#5b5b5b');
        root.style.setProperty('--body-background', '#1c1c1c');
        root.style.setProperty('--main-background', '#3b3b3b');
        root.style.setProperty('--neumorphism', '-12px -12px 12px 0 rgba(77, 77, 77, .3), 12px 12px 12px 0 rgba(0, 0, 0, .07)');
        root.style.setProperty('--neumorphism__inset', 'inset -12px -12px 12px 0 rgba(77, 77, 77, .3), inset 12px 12px 12px 0 rgba(0, 0, 0, .07)')
        darkMode = true;
    }
})