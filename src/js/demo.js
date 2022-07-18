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


// -- T E S T S  ( P L A C E H O L D E R S )
var mail_content = document.createElement("div");
mail_content.innerHTML = "Hi";

var lale_content = document.createElement("div");
lale_content.innerHTML = "Hi";

var gallery_content = document.createElement("div");
gallery_content.innerHTML = "Hi";

var calendar_content = document.createElement("div");
calendar_content.innerHTML = "Hi";

var notes_content = document.createElement("div");
notes_content.innerHTML = "Hi";

mail_content.classList.add("noselect");
lale_content.classList.add("noselect");
gallery_content.classList.add("noselect");
calendar_content.classList.add("noselect");
notes_content.classList.add("noselect");
// -- //


// -- A P P B A R  C O N F I G S
var apps_list_g = [
	{
		"title" : "Files", // window title
		"src" : "src/images/demo/icons/Apps/Files.png", // appbar/window icon
		"content" : files_content // content for the window
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
		"title" : "Gallery",
		"src" : "src/images/demo/icons/Apps/Gallery.png",
		"content" : gallery_content
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
]

// add apps to the appbar
appBarGenerate(apps_list_g);
// -- //
