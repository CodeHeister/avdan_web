const toggle_theme = document.querySelector('.toggle-theme');
let root = document.documentElement;
var is_light = false;

const toggleTheme = e => {
  if (!is_light) { // white
    root.style.setProperty('--cursor-color', '232,233,235');
    root.style.setProperty('--font-primary', '#000');
    root.style.setProperty('--font-secondary', '#5E5E5E');
    root.style.setProperty('--scrollbar-thumb-bg', '#5e5e5e');
    root.style.setProperty('--scrollbar-track-bg', '#9e9e9e');
    root.style.setProperty('--icon-fill', 'black');
    root.style.setProperty('--map-bg', '225,225,225');
    root.style.setProperty('--toggle-theme-color', '#0dcaf0');
    root.style.setProperty('--menu-bg', 'rgba(225,225,225,0.8)');
    root.style.setProperty('--menu-bg-scrolled', 'rgba(225,225,225,0.8)');
    root.style.setProperty('--link-color', '#234BE8');
    root.style.setProperty('--demo-color', 'white');
    root.style.setProperty('--demo-bg', 'black');
    root.style.setProperty('--shadow-color', 'white');
    root.style.setProperty('--title-shadow-color', 'transparent');
    root.style.setProperty('--card-bg', 'rgba(225,225,225,0.5)');
    root.style.setProperty('--card-shadow', 'rgba(0,0,0,0.1)');
    root.style.setProperty('--footer-bg', 'rgba(225,225,225,1)');
    root.style.setProperty('--lines-color', '#a0a0a0');
    root.style.setProperty('--footer-card-bg', '#bbbbbb');
    root.style.setProperty('--start-color', '#656565');
    root.style.setProperty('--finish-color', '#050505');
    root.style.setProperty('--body-bg', 'white');

	document.querySelector(".discord-list iframe").src = 'https://discord.com/widget?id=993464434855002163&theme=light';
	document.querySelector(".toggle-theme").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
	is_light = true;
  } else { // black
    root.style.setProperty('--cursor-color', '225,225,225');
    root.style.setProperty('--font-primary', '#fff');
    root.style.setProperty('--font-secondary', '#a0a0a0');
    root.style.setProperty('--scrollbar-thumb-bg', '#b6b6b6');
    root.style.setProperty('--scrollbar-track-bg', 'rgba(14,15,20,1)');
    root.style.setProperty('--icon-fill', 'white');
    root.style.setProperty('--map-bg', '46,47,53');
    root.style.setProperty('--toggle-theme-color', '#ffc107');
    root.style.setProperty('--menu-bg', 'rgba(46,47,53,0)');
    root.style.setProperty('--menu-bg-scrolled', 'rgba(46,47,53,0.8)');
    root.style.setProperty('--link-color', '#3291FF');
    root.style.setProperty('--demo-color', 'black');
    root.style.setProperty('--demo-bg', 'white');
    root.style.setProperty('--shadow-color', 'black');
    root.style.setProperty('--title-shadow-color', 'black');
    root.style.setProperty('--card-bg', 'rgba(46,47,54,0.5)');
    root.style.setProperty('--card-shadow', 'transparent');
    root.style.setProperty('--footer-bg', 'rgba(46,47,54,1)');
    root.style.setProperty('--lines-color', '#5E5E5E');
    root.style.setProperty('--footer-card-bg', '#32393d');
    root.style.setProperty('--start-color', '#9a9a9a');
    root.style.setProperty('--finish-color', '#fbfbfb');
    root.style.setProperty('--body-bg', 'rgba(14,15,20,1)');

	document.querySelector(".discord-list iframe").src = 'https://discord.com/widget?id=993464434855002163&theme=dark';
	document.querySelector(".toggle-theme").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
	is_light = false;
  }
}

toggle_theme.addEventListener('click', e => toggleTheme());

