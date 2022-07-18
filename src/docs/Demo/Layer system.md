# Demo webpage structure

## What is it written in?
It uses only `HTML/CSS/JS`, so it __works out of box__, is _optimized_ and has _no additional requirement_. Moreover, it can be _real-time edited_.

## Structure layers
1. `drag_and_leave.js` is the __basic demo library__. It controls __drag__, __drop__, __out of bounds__ and some __click events__. It makes windows in demo _interactive_, _multifunctional_ and _easy to configure_ or _add new drag event_.
2. `windows.js` is the __main demo library__. It defines __how to build/use the windows__ and __how they can interact__ with each other. It also contains __app bar builder__.
3. `demo.js` _should_ contain __app bar configurations__, __startup windows__ and __window content__, but it's optional, because all the content __can be loaded from different files__, but __should be loaded from one place__.

## Additional files
Demo webpage also uses `intro.js` and `intro.css` to __run the intro__. Intro is `HTML/CSS`, but `intro.js` defines __cool down__ via cookies.