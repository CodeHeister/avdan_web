const toggle_theme = document.querySelector('.toggle-theme');
let root = document.documentElement;
var is_light = false;

toggle_theme.addEventListener('click', e => {
  if (!is_light) {
    root.style.setProperty('--cursor-color', '48,48,48');
    root.style.setProperty('--font-primary', '#000');
    root.style.setProperty('--body-bg', 'white');
    root.style.setProperty('--scrollbar-thumb-bg', '#cecece');
    root.style.setProperty('--scrollbar-thumb-color', '#5E5E5E');
    root.style.setProperty('--scrollbar-track-bg', '#EEEEEE');
    root.style.setProperty('--icon-fill', 'black');
	is_light = true;
  } else {
    root.style.setProperty('--cursor-color', '225,225,225');
    root.style.setProperty('--font-primary', '#fff');
    root.style.setProperty('--body-bg', 'black');
    root.style.setProperty('--scrollbar-thumb-bg', '#333');
    root.style.setProperty('--scrollbar-thumb-color', '#aaa');
    root.style.setProperty('--scrollbar-track-bg', '#101010');
    root.style.setProperty('--icon-fill', 'white');
	is_light = false;
  }
})
