let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');

    let mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `Ativar ${mode} mode`;

    darkMode = !darkMode;
})