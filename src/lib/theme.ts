export const THEME_STORAGE_KEY = 'vite-ui-theme';

// Runs inline in <head> before first paint: saved theme, otherwise dark.
export const themeInitScript = `(function(){var t;try{t=localStorage.getItem('${THEME_STORAGE_KEY}')}catch(e){}if(t!=='light'&&t!=='dark')t='dark';document.documentElement.classList.add(t)})();`;
