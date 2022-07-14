// M A I N

var files_content = document.createElement("div");
files_content.classList.add("files-content");

var files_title = document.createElement("div");
files_title.classList.add("files-title");
files_title.innerHTML = "Files";
files_content.appendChild(files_title);

var files_searchbar_holder = document.createElement("div");
files_searchbar_holder.classList.add("files-searchbar-holder");

var files_searchbar = document.createElement("div");
files_searchbar.classList.add("files-searchbar");

var files_searchbar_input = document.createElement("input");
files_searchbar_input.setAttribute("type", "text");
files_searchbar_input.setAttribute("placeholder", "Find a file...");
files_searchbar.appendChild(files_searchbar_input);

var files_searchbar_icon = document.createElement("img");
files_searchbar_icon.src = "src/images/demo/icons/Search.png";
files_searchbar.appendChild(files_searchbar_icon);

files_searchbar_holder.appendChild(files_searchbar);
files_content.appendChild(files_searchbar_holder);

var files_folder_list = document.createElement("div");
files_folder_list.classList.add("files-folder-list");

var files_open_list = document.createElement("div");
files_open_list.classList.add("files-open-list");

var files_open_list_items = [
	{
		"title" : "Favorites",
		"items" : [
			{
				"src" : "src/images/demo/icons/Files/Documents.png",
				"label" : "Documents"
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
				"src" : "src/images/demo/icons/Files/Folder.png",
				"label" : "Notes"
			},
			{
				"src" : "src/images/demo/icons/Files/Folder.png",
				"label" : "Voice Memos"
			},
			{
				"src" : "src/images/demo/icons/Files/Folder.png",
				"label" : "Work"
			},
			{
				"src" : "src/images/demo/icons/Files/Folder.png",
				"label" : "Wallpapers"
			},
			{
				"src" : "src/images/demo/icons/Files/Folder.png",
				"label" : "Project M"
			},
		]
	},
	{
		"title" : "Tags",
		"items" : [
			{
				"src" : "rounded",
				"label" : "Projects",
				"color" : "#519fc4"
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

files_open_list_items.forEach(item => {
	var files_open_list_item = document.createElement("div");
	files_open_list_item.classList.add("files-open-list-item");

	var files_open_list_item_title = document.createElement("div");
	files_open_list_item_title.classList.add("files-open-list-item-title");
	files_open_list_item_title.innerHTML = item.title;

	var files_open_list_item_folders = document.createElement("div");
	files_open_list_item_folders.classList.add("files-open-list-item-folders");

	item["items"].forEach(folder => {
		var files_open_list_item_folder = document.createElement("div");
		files_open_list_item_folder.classList.add("files-open-list-item-folder");

		var files_open_list_item_folder_src;
		if (folder.src == "rounded") {
			files_open_list_item_folder_src = document.createElement("div");
			files_open_list_item_folder_src.classList.add("rounded-icon");
			files_open_list_item_folder_src.style.backgroundColor = folder.color;
		}
		else {
			files_open_list_item_folder_src = document.createElement("img");
			files_open_list_item_folder_src.src = folder.src;
		}

		var files_open_list_item_folder_label = document.createElement("div");
		files_open_list_item_folder_label.classList.add("folder-label");
		files_open_list_item_folder_label.innerHTML = folder.label;

		files_open_list_item_folder.appendChild(files_open_list_item_folder_src);
		files_open_list_item_folder.appendChild(files_open_list_item_folder_label);
		files_open_list_item_folders.appendChild(files_open_list_item_folder);
	});

	files_open_list_item.appendChild(files_open_list_item_title);
	files_open_list_item.appendChild(files_open_list_item_folders);
	files_open_list.appendChild(files_open_list_item);
});

files_closed_items = [
	{
		"title" : "Recently Opened",
		"items" : [
			{
				"src" : "src/images/demo/icons/Files/Documents.png",
				"label" : "2022 Monthly Expenses",
				"date" : "5m ago"
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
		"title" : "Recently Opened",
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
				"src" : "src/images/demo/icons/Files/Folder.png",
				"label" : "Project X",
			}
		],
	}
]

var files_closed_list = document.createElement("div");
files_closed_list.classList.add("files-closed-list");

files_closed_items.forEach(item => {
	var files_closed_item = document.createElement("div");
	files_closed_item.classList.add("files-closed-item");

	var files_closed_title = document.createElement("div");
	files_closed_title.classList.add("files-closed-title");
	files_closed_title.innerHTML = item.title;
	files_closed_item.appendChild(files_closed_title);

	var files_closed_folders = document.createElement("div");
	files_closed_folders.classList.add("files-closed-folders");
	item.items.forEach(folder => {
		var files_closed_folder = document.createElement("div");
		files_closed_folder.classList.add("files-closed-folder");

		var files_closed_folder_icon = document.createElement("img");
		files_closed_folder_icon.classList.add("right-folders-icon");
		files_closed_folder_icon.src = folder.src;
		files_closed_folder.appendChild(files_closed_folder_icon);

		var files_closed_folder_label = document.createElement("div");
		files_closed_folder_label.classList.add("right-folders-label");
		files_closed_folder_label.innerHTML = folder.label;
		files_closed_folder.appendChild(files_closed_folder_label);

		var files_closed_folder_date = document.createElement("div");
		files_closed_folder_date.classList.add("right-folders-date");
		files_closed_folder_date.innerHTML = folder.date || "";
		files_closed_folder.appendChild(files_closed_folder_date);

		files_closed_folders.appendChild(files_closed_folder);
	});
	files_closed_item.appendChild(files_closed_folders);
	files_closed_list.appendChild(files_closed_item);
});

files_folder_list.appendChild(files_open_list);
files_folder_list.appendChild(files_closed_list);

files_content.appendChild(files_folder_list);




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

files_content.classList.add("noselect");
mail_content.classList.add("noselect");
lale_content.classList.add("noselect");
gallery_content.classList.add("noselect");
calendar_content.classList.add("noselect");
notes_content.classList.add("noselect");

var apps_list_g = [
	{
		"title" : "Files",
		"src" : "src/images/demo/icons/Apps/Files.png",
		"content" : files_content
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

appBarGenerate(apps_list_g);
