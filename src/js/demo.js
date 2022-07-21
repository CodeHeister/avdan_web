// M A I N

// -- F I L E  M A N A G E R -- //

// M A I N  E L E M E N T
var files_content = document.createElement("div");
files_content.classList.add("files-content");

// -- M A I N  T I T L E
var files_title = document.createElement("div");
files_title.classList.add("files-title");
files_title.innerHTML = "Files";
files_content.appendChild(files_title);
// -- //

// -- S E A R C H B A R  W R A P
var files_searchbar_holder = document.createElement("div");
files_searchbar_holder.classList.add("files-searchbar-holder");

// S E A R C H B A R 
var files_searchbar = document.createElement("div");
files_searchbar.classList.add("files-searchbar");

// I N P U T  E L E M E N T 
var files_searchbar_input = document.createElement("input");
files_searchbar_input.setAttribute("type", "text");
files_searchbar_input.setAttribute("placeholder", "Find a file...");

// S E A R C H  I C O N
var files_searchbar_icon = document.createElement("img");
files_searchbar_icon.src = "src/images/demo/icons/Search.png";

// A D D I N G  S E A R C H B A R
files_searchbar.appendChild(files_searchbar_input);
files_searchbar.appendChild(files_searchbar_icon);

files_searchbar_holder.appendChild(files_searchbar);

files_content.appendChild(files_searchbar_holder);
// -- //

// -- A L L  F I L E S  A N D  F O L D E R S
var files_folder_list = document.createElement("div");
files_folder_list.classList.add("files-folder-list");

// L E F T  S I D E  C O N F I G S
var files_open_list_items = [
	{
		"title" : "Favorites", // section title
		"items" : [
			{
				"src" : "src/images/demo/icons/Files/Documents.png", // item icon
				"label" : "Documents" // item label
			},
			{
				"src" : "src/images/demo/icons/Files/Downloads.png",
				"label" : "Downloads"
			},
			{
				"src" : "src/images/demo/icons/Files/Aplications.png",
				"label" : "Applications"
			},
			{
				"src" : "src/images/demo/icons/Files/Desktop.png",
				"label" : "Desktop"
			},
			{
				"src" : "src/images/demo/icons/Files/Recents.png",
				"label" : "Recents"
			},
		]
	},
	{
		"title" : "Pinned",
		"items" : [
			{
				"src" : "folder", // special element "folder" (svg)
				"label" : "Notes",
				"color" : "#d06b6e" // color for special element
			},
			{
				"src" : "folder",
				"label" : "Voice Memos",
				"color" : "#d54686"
			},
			{
				"src" : "folder",
				"label" : "Work",
				"color" : "#835cc0"
			},
			{
				"src" : "folder",
				"label" : "Wallpapers",
				"color" : "#379ea4"
			},
			{
				"src" : "folder",
				"label" : "Project M",
				"color" : "#519fc4" // default color
			},
		]
	},
	{
		"title" : "Tags",
		"items" : [
			{
				"src" : "rounded", // special element "circle" (div)
				"label" : "Projects",
				"color" : "#519fc4" // default color
			},
			{
				"src" : "rounded",
				"label" : "Important",
				"color" : "#d06b6e"
			},
			{
				"src" : "rounded",
				"label" : "Sound",
				"color" : "#d54686"
			},
			{
				"src" : "rounded",
				"label" : "Work",
				"color" : "#835cc0"
			},
			{
				"src" : "rounded",
				"label" : "Travel",
				"color" : "#d59232"
			},
			{
				"src" : "rounded",
				"label" : "Design",
				"color" : "#379ea4"
			}
		]
	}
]

// L E F T  S I D E
var files_open_list = document.createElement("div");
files_open_list.classList.add("files-open-list");

// - L E F T  S I D E  C O N S T R U C T O R
files_open_list_items.forEach(item => {
	// create a section
	var files_open_list_item = document.createElement("div");
	files_open_list_item.classList.add("files-open-list-item");

	// create title for it
	var files_open_list_item_title = document.createElement("div");
	files_open_list_item_title.classList.add("files-open-list-item-title");
	files_open_list_item_title.innerHTML = item.title;

	// craete folders/files list
	var files_open_list_item_folders = document.createElement("div");
	files_open_list_item_folders.classList.add("files-open-list-item-folders");

	// roll through the items
	item["items"].forEach(folder => {
		// craete main wrap for folder/file
		var files_open_list_item_folder = document.createElement("div");
		files_open_list_item_folder.classList.add("files-open-list-item-folder");

		// create icon
		var files_open_list_item_folder_src;
		if (folder.src == "rounded") { // if circle needed
			files_open_list_item_folder_src = document.createElement("div");
			files_open_list_item_folder_src.classList.add("rounded-icon");
			files_open_list_item_folder_src.style.backgroundColor = folder.color || "#519fc4";
		}
		else if (folder.src == "folder") { // if colored folder needed
			files_open_list_item_folder_src = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			files_open_list_item_folder_src.setAttributeNS(null, "viewBox", "0 0 96 96");
			files_open_list_item_folder_src.innerHTML = '<path d="M 12 8.5 L 30 8.5 C 30 8.5 35 8.5 38 12 L 41 14.5 C 41 14.5 44 17 46 16.5 L 82 16.5 C 82 16.5 88 18 91 26 L 91.5 79 C 91.5 79 91.75 88.75 83 88.5 L 13 88.5 C 13 88.5 5 88 4 79 L 4 20 C 4 20 4 11 12 8.5 Z"></path><path d="M 4 44 L 4 79 C 4 79 5 88 13 88.5 L 83 88.5 C 83 88.5 91.75 88.75 91.5 79 L 91.5 44 C 91.5 44 89 38 83 38 L 13 38 C 13 38 6 37 4 44 Z"></path>';
			files_open_list_item_folder_src.style.fill = folder.color || "#519fc4";
		}
		else { // default img 
			files_open_list_item_folder_src = document.createElement("img");
			files_open_list_item_folder_src.src = folder.src;
		}

		// create label to folder/file
		var files_open_list_item_folder_label = document.createElement("div");
		files_open_list_item_folder_label.classList.add("folder-label");
		files_open_list_item_folder_label.innerHTML = folder.label;

		// add all to the wrap
		files_open_list_item_folder.appendChild(files_open_list_item_folder_src);
		files_open_list_item_folder.appendChild(files_open_list_item_folder_label);

		// add to the folders
		files_open_list_item_folders.appendChild(files_open_list_item_folder);
	});

	// add titles and folders
	files_open_list_item.appendChild(files_open_list_item_title);
	files_open_list_item.appendChild(files_open_list_item_folders);

	// add to the left side element
	files_open_list.appendChild(files_open_list_item);
});
// - //

// R I G H T  S I D E  C O N F I G S
files_closed_items = [
	{
		"title" : "Recently Opened", // section title
		"items" : [
			{
				"src" : "src/images/demo/icons/Files/Documents.png", // item icon
				"label" : "2022 Monthly Expenses", // item label
				"date" : "5m ago" // last opened date
			},
			{
				"src" : "src/images/demo/icons/Files/Downloads.png",
				"label" : "Instructions",
				"date" : "1h ago"
			},
			{
				"src" : "src/images/demo/icons/Files/Documents.png",
				"label" : "Rental Agreement",
				"date" : "2h ago"
			}
		],
	},
	{
		"title" : "Recommended",
		"items" : [
			{
				"src" : "src/images/demo/icons/Files/Documents.png",
				"label" : "Introduction Video.aep",
			},
			{
				"src" : "src/images/demo/icons/Files/Documents.png",
				"label" : "Brand Guidelines.psd",
			},
			{
				"src" : "folder",
				"label" : "Project X",
			}
		],
	}
]

// R I G H T  S I D E
var files_closed_list = document.createElement("div");
files_closed_list.classList.add("files-closed-list");

// - R I G H T  S I D E  C O N S T R U C T O R
files_closed_items.forEach(item => {
	// create a section 
	var files_closed_item = document.createElement("div");
	files_closed_item.classList.add("files-closed-item");

	// create a title for section
	var files_closed_title = document.createElement("div");
	files_closed_title.classList.add("files-closed-title");
	files_closed_title.innerHTML = item.title;

	// folders/files list wrpa
	var files_closed_folders = document.createElement("div");
	files_closed_folders.classList.add("files-closed-folders");

	// roll through items
	item.items.forEach(folder => {
		// create folder/file wrpa
		var files_closed_folder = document.createElement("div");
		files_closed_folder.classList.add("files-closed-folder");

		// create icon
		if (folder.src == "folder") { // if colored folder needed
			var files_closed_folder_icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			files_closed_folder_icon.setAttributeNS(null, "viewBox", "0 0 96 96");
			files_closed_folder_icon.innerHTML = '<path d="M 12 8.5 L 30 8.5 C 30 8.5 35 8.5 38 12 L 41 14.5 C 41 14.5 44 17 46 16.5 L 82 16.5 C 82 16.5 88 18 91 26 L 91.5 79 C 91.5 79 91.75 88.75 83 88.5 L 13 88.5 C 13 88.5 5 88 4 79 L 4 20 C 4 20 4 11 12 8.5 Z"></path><path d="M 4 44 L 4 79 C 4 79 5 88 13 88.5 L 83 88.5 C 83 88.5 91.75 88.75 91.5 79 L 91.5 44 C 91.5 44 89 38 83 38 L 13 38 C 13 38 6 37 4 44 Z"></path>';
			files_closed_folder_icon.style.fill = folder.color || "#519fc4";
		}
		else { // default img
			var files_closed_folder_icon = document.createElement("img");
			files_closed_folder_icon.classList.add("right-folders-icon");
			files_closed_folder_icon.src = folder.src;
		}

		// create label
		var files_closed_folder_label = document.createElement("div");
		files_closed_folder_label.classList.add("right-folders-label");
		files_closed_folder_label.innerHTML = folder.label;

		// add date (default "" if none)
		var files_closed_folder_date = document.createElement("div");
		files_closed_folder_date.classList.add("right-folders-date");
		files_closed_folder_date.innerHTML = folder.date || "";

		// add all element to the wrap
		files_closed_folder.appendChild(files_closed_folder_icon);
		files_closed_folder.appendChild(files_closed_folder_label);
		files_closed_folder.appendChild(files_closed_folder_date);

		// add to the folders/files wrap
		files_closed_folders.appendChild(files_closed_folder);
	});

	// title and folders to the section
	files_closed_item.appendChild(files_closed_title);
	files_closed_item.appendChild(files_closed_folders);

	// add section to the right side
	files_closed_list.appendChild(files_closed_item);
});
// - //

// add right and left side to the wrap
files_folder_list.appendChild(files_open_list);
files_folder_list.appendChild(files_closed_list);

// make unselectable
files_content.classList.add("noselect");

// add wrap to the main
files_content.appendChild(files_folder_list);
// -- //

// -- P H O T O S -- //

var photos_content = document.createElement("div");
photos_content.classList.add("photos-content");

// -- M A I N  T I T L E
var photos_title = document.createElement("div");
photos_title.classList.add("photos-title");
photos_title.innerHTML = "Photos";
photos_content.appendChild(photos_title);

var photos_main = document.createElement("div");
photos_main.classList.add("photos-main");

var photos_placeholder = document.createElement("div");
photos_placeholder.classList.add("photos-placeholder");
photos_placeholder.innerHTML = "There is no content here for now...";
photos_main.appendChild(photos_placeholder);

photos_content.appendChild(photos_main);
// -- //

// -- L A L E -- //

var lale_content = document.createElement("div");
lale_content.classList.add("lale-content");

// -- M A I N  B U T T O N S
var lale_buttons = document.createElement("div");
lale_buttons.classList.add("lale-buttons");

lale_top_buttons = [
	{
	}
]


lale_content.appendChild(lale_buttons);

// -- M A I N  I C O N
var lale_icon = document.createElement("div");
lale_icon.classList.add("lale-icon");

var lale_icon_img = document.createElement("img");
lale_icon_img.src = "src/images/demo/icons/Apps/Lale.png";

// -- M A I N  T I T L E
var lale_title = document.createElement("div");
lale_title.classList.add("lale-title");
lale_title.innerHTML = "Lale";

lale_icon.appendChild(lale_icon_img);
lale_icon.appendChild(lale_title);
lale_content.appendChild(lale_icon);

// -- S E A R C H B A R  W R A P
var lale_searchbar_holder = document.createElement("div");
lale_searchbar_holder.classList.add("lale-searchbar-holder");

// S E A R C H B A R 
var lale_searchbar = document.createElement("div");
lale_searchbar.classList.add("lale-searchbar");

// S E A R C H  I C O N
var lale_searchbar_icon = document.createElement("img");
lale_searchbar_icon.src = "src/images/demo/icons/Search.png";

// I N P U T  E L E M E N T 
var lale_searchbar_input = document.createElement("input");
lale_searchbar_input.setAttribute("type", "text");
lale_searchbar_input.setAttribute("placeholder", "Search...");

// A D D I N G  S E A R C H B A R
lale_searchbar.appendChild(lale_searchbar_icon);
lale_searchbar.appendChild(lale_searchbar_input);

lale_searchbar_holder.appendChild(lale_searchbar);

lale_content.appendChild(lale_searchbar_holder);

// -- //

// -- T E S T S  ( P L A C E H O L D E R S )

// -- M A I L -- //

var mail_content = document.createElement("div");
mail_content.classList.add("mail-content");

// -- M A I N  T I T L E
var mail_title = document.createElement("div");
mail_title.classList.add("mail-title");
mail_title.innerHTML = "Mail";
mail_content.appendChild(mail_title);

var mail_main = document.createElement("div");
mail_main.classList.add("mail-main");

var mail_placeholder = document.createElement("div");
mail_placeholder.classList.add("mail-placeholder");
mail_placeholder.innerHTML = "There is no content here for now...";
mail_main.appendChild(mail_placeholder);

mail_content.appendChild(mail_main);
// -- //

// -- C A L E N D A R -- //

var calendar_content = document.createElement("div");
calendar_content.classList.add("calendar-content");

// -- M A I N  T I T L E
var calendar_title = document.createElement("div");
calendar_title.classList.add("calendar-title");
calendar_title.innerHTML = "Calendar";
calendar_content.appendChild(calendar_title);

var calendar_main = document.createElement("div");
calendar_main.classList.add("calendar-main");

var calendar_placeholder = document.createElement("div");
calendar_placeholder.classList.add("calendar-placeholder");
calendar_placeholder.innerHTML = "There is no content here for now...";
calendar_main.appendChild(calendar_placeholder);

calendar_content.appendChild(calendar_main);
// -- //

// -- N O T E S -- //

var notes_content = document.createElement("div");
notes_content.classList.add("notes-content");

// -- M A I N  T I T L E
var notes_title = document.createElement("div");
notes_title.classList.add("notes-title");
notes_title.innerHTML = "Notes";
notes_content.appendChild(notes_title);

var notes_main = document.createElement("div");
notes_main.classList.add("notes-main");

var notes_placeholder = document.createElement("div");
notes_placeholder.classList.add("notes-placeholder");
notes_placeholder.innerHTML = "There is no content here for now...";
notes_main.appendChild(notes_placeholder);

notes_content.appendChild(notes_main);
// -- //

// -- S E T T I N G S -- //

var settings_content = document.createElement("div");
settings_content.classList.add("settings-content");

// -- M A I N  T I T L E
var settings_title = document.createElement("div");
settings_title.classList.add("settings-title");
settings_title.innerHTML = "Settings";
settings_content.appendChild(settings_title);

var settings_main = document.createElement("div");
settings_main.classList.add("settings-main");

var settings_placeholder = document.createElement("div");
settings_placeholder.classList.add("settings-placeholder");
settings_placeholder.innerHTML = "There is no content here for now...";
settings_main.appendChild(settings_placeholder);

settings_content.appendChild(settings_main);
// -- //

// -- M U S I C -- //

var music_content = document.createElement("div");
music_content.classList.add("music-content");

// -- M A I N  T I T L E
var music_title = document.createElement("div");
music_title.classList.add("music-title");
music_title.innerHTML = "Music";
music_content.appendChild(music_title);

var music_main = document.createElement("div");
music_main.classList.add("music-main");

var music_placeholder = document.createElement("div");
music_placeholder.classList.add("music-placeholder");
music_placeholder.innerHTML = "There is no content here for now...";
music_main.appendChild(music_placeholder);

music_content.appendChild(music_main);
// -- //

// -- M E S S G E S -- //

var messages_content = document.createElement("div");
messages_content.classList.add("messages-content");

// -- M A I N  T I T L E
var messages_title = document.createElement("div");
messages_title.classList.add("messages-title");
messages_title.innerHTML = "Messages";
messages_content.appendChild(messages_title);

var messages_main = document.createElement("div");
messages_main.classList.add("messages-main");

var messages_placeholder = document.createElement("div");
messages_placeholder.classList.add("messages-placeholder");
messages_placeholder.innerHTML = "There is no content here for now...";
messages_main.appendChild(messages_placeholder);

messages_content.appendChild(messages_main);
// -- //

mail_content.classList.add("noselect");
lale_content.classList.add("noselect");
photos_content.classList.add("noselect");
calendar_content.classList.add("noselect");
notes_content.classList.add("noselect");
settings_content.classList.add("noselect");
music_content.classList.add("noselect");
messages_content.classList.add("noselect");
// -- //


// -- A P P B A R  C O N F I G S
var apps_list_g = [
	{
		"title" : "Files", // window title
		"src" : "src/images/demo/icons/Apps/Files.png", // appbar/window icon
		"content" : files_content, // content for the window
		"extraClass" : ["file-manager"] // extra classes for window (optional)
	},
	{
		"title" : "Mail",
		"src" : "src/images/demo/icons/Apps/Mail.png",
		"content" : mail_content
	},
	{
		"title" : "Lale",
		"src" : "src/images/demo/icons/Apps/Lale.png",
		"content" : lale_content
	},
	{
		"title" : "Photos",
		"src" : "src/images/demo/icons/Apps/Gallery.png",
		"content" : photos_content
	},
	{
		"title" : "Calendar",
		"src" : "src/images/demo/icons/Apps/Calendar.png",
		"content" : calendar_content
	},
	{
		"title" : "Notes",
		"src" : "src/images/demo/icons/Apps/Notes.png",
		"content" : notes_content
	},
	{
		"content" : "hr"
	},
	{
		"title" : "Settings",
		"src" : "src/images/demo/icons/Apps/Settings.png",
		"content" : settings_content
	},
	{
		"title" : "Music",
		"src" : "src/images/demo/icons/Apps/Music.png",
		"content" : music_content
	},
	{
		"title" : "Messages",
		"src" : "src/images/demo/icons/Apps/Messages.png",
		"content" : messages_content
	},
]

// add apps to the appbar
appBarGenerate(apps_list_g);
// -- //


// -- W E A T H E R  &  T I M E

var weather_time = document.createElement("div");
weather_time.classList.add("weather-time");
weather_time.classList.add("noselect");

var date = new Date;

var curr_time = document.createElement("div");
curr_time.classList.add("curr-time");
curr_time.innerHTML = `${date.getHours()}:${(date.getMinutes() < 10) && "0"+date.getMinutes() || date.getMinutes()}`;
setInterval(() => {
	var date = new Date;
	curr_time.innerHTML = `${date.getHours()}:${(date.getMinutes() < 10) && "0"+date.getMinutes() || date.getMinutes()}`;
}, 1000);


var curr_date = document.createElement("div");
curr_date.classList.add("curr-date");
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
curr_date.innerHTML = `${days[date.getDay()-1]}, ${date.toDateString().split(' ')[1]} ${date.getDate()}`;
setInterval(() => {
	var date = new Date;
	curr_date.innerHTML = `${days[date.getDay()-1]}, ${date.toDateString().split(' ')[1]} ${date.getDate()}`;
}, 1000*60*60);

var time_panel = document.createElement("div");
time_panel.classList.add("time-panel");
time_panel.appendChild(curr_time);
time_panel.appendChild(curr_date);

var weather_icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
weather_icon.setAttributeNS(null, "viewBox", "0 0 24 24");
weather_icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';

var weather_grad = document.createElement("div");
weather_grad.classList.add("weather-grad");
weather_grad.innerHTML = "24&#176;";

var weather_panel = document.createElement("div");
weather_panel.classList.add("weather-panel");
weather_panel.appendChild(weather_icon);
weather_panel.appendChild(weather_grad);

weather_time.appendChild(time_panel);
weather_time.appendChild(weather_panel);

// -- //

var player = document.createElement("div");
player.classList.add("player");
player.classList.add("noselect");

var player_icon = document.createElement("div");
player_icon.classList.add("player-icon");

var player_icon_img = document.createElement("img");
player_icon_img.src = "src/images/player_img.jpg";
player_icon.appendChild(player_icon_img);

var player_info = document.createElement("div");
player_info.classList.add("player-info");

var player_title = document.createElement("div");
player_title.classList.add("player-title");
player_title.innerHTML = "Une belle historie";

var plyer_artist = document.createElement("div");
plyer_artist.classList.add("player-artist");
plyer_artist.innerHTML = "Michel Fugain";

player_info.appendChild(player_title);
player_info.appendChild(plyer_artist);

var player_control = document.createElement("div");
player_control.classList.add("player-control");

var player_prev = document.createElementNS("http://www.w3.org/2000/svg", "svg");
player_prev.setAttributeNS(null, "viewBox", "0 0 24 24");
player_prev.innerHTML = '<path d="M0 21 v -15 c 0 0 -0.5 -4 3 -3 l 12 7.5 c 0 0 1.5 1.5 0 3 l -12 7.5 c 0 0 -4 1 -3 -3 z m 12 -16 c 0 0 -2 0 -1 2.268 l 5.888 3.732 c 0 0 1 1 0 2 l -3.888 2.732 c 0 0 -4.5 2.5 -1 3.268 l 11 -6 c 0 0 1 -1 0 -2 l -11 -6 z"></path>';
player_prev.style.transform = "rotate(180deg)";
player_prev.style.fill = "#ffffff";

var player_pause = document.createElementNS("http://www.w3.org/2000/svg", "svg");
player_pause.setAttributeNS(null, "viewBox", "0 0 24 24");
player_pause.innerHTML = '<path d="M10 24 h -3 c 0 0 -3 0 -3 -3 v -18 c 0 0 0 -3 3 -3 c 0 0 3 0 3 3 v 18 c 0 0 0 3 -3 3 z m 10 0 h -3 c 0 0 -3 0 -3 -3 v -18 c 0 0 0 -3 3 -3 c 0 0 3 0 3 3 v 18 c 0 0 0 3 -3 3 z"></path>';
player_pause.style.fill = "#ffffff";

var player_next = document.createElementNS("http://www.w3.org/2000/svg", "svg");
player_next.setAttributeNS(null, "viewBox", "0 0 24 24");
player_next.innerHTML = '<path d="M0 21 v -15 c 0 0 -0.5 -4 3 -3 l 12 7.5 c 0 0 1.5 1.5 0 3 l -12 7.5 c 0 0 -4 1 -3 -3 z m 12 -16 c 0 0 -2 0 -1 2.268 l 5.888 3.732 c 0 0 1 1 0 2 l -3.888 2.732 c 0 0 -4.5 2.5 -1 3.268 l 11 -6 c 0 0 1 -1 0 -2 l -11 -6 z"></path>';
player_next.style.fill = "#ffffff";

player_control.appendChild(player_prev);
player_control.appendChild(player_pause);
player_control.appendChild(player_next);

player.appendChild(player_icon);
player.appendChild(player_info);
player.appendChild(player_control);

// -- S C R O L L  B A R  C O N F I G S

var scroll_list_g = { 
	"pos" : 0,
	"items" : [
		weather_time,
		player,
	]
}

scrollBarGenerate(scroll_list_g);
// -- //

var app_bar = document.querySelector(".app-bar");
app_bar.addEventListener("mousedown", e => {dragAdd(e, ".app-bar", ".app-bar", barDropTransition, undefined, undefined, undefined, insertBar)});
window.addEventListener("mouseup", e => {leave(e, ".app-bar")});

var menu_bar = document.querySelector(".menu-bar");
menu_bar.addEventListener("mousedown", e => {dragAdd(e, ".menu-bar", ".menu-bar", barDropTransition, undefined, undefined, undefined, insertBar)});
window.addEventListener("mouseup", e => {leave(e, ".menu-bar")});

var scroll_bar = document.querySelector(".scroll-bar");
scroll_bar.addEventListener("mousedown", e => {dragAdd(e, ".scroll-bar", ".scroll-bar", barDropTransition, undefined, undefined, undefined, insertBar)});
window.addEventListener("mouseup", e => {leave(e, ".scroll-bar")});

var info_bar = document.querySelector(".info-bar");
info_bar.addEventListener("mousedown", e => {dragAdd(e, ".info-bar", ".info-bar", barDropTransition, undefined, undefined, undefined, insertBar)});
window.addEventListener("mouseup", e => {leave(e, ".info-bar")});

if (window.navigator.userAgent.match("Firefox")) {
	var app_bar = document.querySelector(".app-bar");
	app_bar.querySelectorAll(".img-wrapper img").forEach(item => {
		item.style.width = item.clientHeight+"px";
	});
	window.addEventListener("resize", e => {
		var app_bar = document.querySelector(".app-bar");
		app_bar.querySelectorAll(".img-wrapper img").forEach(item => {
			item.style.width = item.clientHeight+"px";
		});
	});
}
