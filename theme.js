(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');
  const update = () => {
    const light = root.classList.contains('light');
    button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    button.firstElementChild.textContent = light ? '☾' : '☼';
  };
  update();
  button.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    update();
  });
})();
