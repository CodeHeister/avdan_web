const translate = (e, info) => {
	var trans_list = info["list"];
	trans_list.forEach(item => {
		var targets = document.querySelectorAll(item);
		for (var i = 0; i < item.length; i++) {
			targets[i],innerHTML = trans_list["item"][i];
		}
	});
}

var langs = [
	{
		"name" : "Danish",
		"lang" : "da-DK",
		"author" : ["Ragsie"],
		"author-link" : ["https://github.com/Ragsie"],
		"list" : da_dk,
		"flag" : "🇩🇰"
	},
	{
		"name" : "German - Germany",
		"lang" : "de-DE",
		"author" : ["LeBogoo"],
		"author-link" : ["https://github.com/LeBogoo"],
		"list" : de_de,
		"flag" : "🇩🇪"
	},
	{
		"name" : "Greek - Greece",
		"lang" : "el-GR",
		"author" : ["lolyes16"],
		"author-link" : ["https://github.com/lolyes16"],
		"list" : el_gr,
		"flag" : "🇬🇷"
	},
	{
		"name" : "English - UK",
		"lang" : "en-GB",
		"author" : [],
		"author-link" : [],
		"list" : en_gb,
		"flag" : "🇬🇧"
	},
	{
		"name" : "English - U.S.A.",
		"lang" : "en-US",
		"author" : [],
		"author-link" : [],
		"list" : en_us,
		"flag" : "🇬🇧"
	},
	{
		"name" : "Spanish - Spain/Traditional",
		"lang" : "es-ES",
		"author" : ["FacuA0"],
		"author-link" : ["https://github.com/FacuA0"],
		"list" : es_es,
		"flag" : "🇪🇸"
	},
	{
		"name" : "French",
		"lang" : "fr-FR",
		"author" : ["Golem642"],
		"author-link" : ["https://github.com/Golem642"],
		"list" : fr_fr,
		"flag" : "🇫🇷"
	},
	{
		"name" : "Hindi",
		"lang" : "hi",
		"author" : ["Padmanabh82"],
		"author-link" : ["https://github.com/Padmanabh82"],
		"list" : hi,
		"flag" : "🇮🇳"
	},
	{
		"name" : "Indonesian - Indonesia",
		"lang" : "id-ID",
		"author" : ["AdvendraDeswanta"],
		"author-link" : ["https://github.com/AdvendraDeswanta"],
		"list" : id_id,
		"flag" : "🇮🇩"
	},
	{
		"name" : "Italian",
		"lang" : "it-IT",
		"author" : ["akane6704"],
		"author-link" : ["https://github.com/akane6704"],
		"list" : it_it,
		"flag" : "🇮🇹"
	},
	{
		"name" : "Dutch - Netherland",
		"lang" : "nl-NL",
		"author" : ["AZProductions"],
		"author-link" : ["https://github.com/AZProductions"],
		"list" : nl_nl,
		"flag" : "🇳🇱"
	},
	{
		"name" : "Polish",
		"lang" : "pl",
		"author" : ["Ragsie"],
		"author-link" : ["https://github.com/Ragsie"],
		"list" : pl,
		"flag" : "🇵🇱"
	},
	{
		"name" : "Russian",
		"lang" : "ru",
		"author" : ["MrSerge01"],
		"author-link" : ["https://github.com/MrSerge01"],
		"list" : ru,
		"flag" : "🇷🇺"
	},
	{
		"name" : "Serbian",
		"lang" : "sr-SP",
		"author" : ["HeroesOfBalkan"],
		"author-link" : ["https://github.com/HeroesOfBalkan"],
		"list" : sp_sp,
		"flag" : "🇷🇸"
	},
	{
		"name" : "Swedish",
		"lang" : "sv-SE",
		"author" : ["GrumpyPingu"],
		"author-link" : ["https://github.com/GrumpyPingu"],
		"list" : sv_se,
		"flag" : "🇷🇸"
	},
	{
		"name" : "Chinese - Simplified",
		"lang" : "zh-CN",
		"author" : ["froxcey"],
		"author-link" : ["https://github.com/froxcey"],
		"list" : zh_cn,
		"flag" : "🇨🇳"
	},
	{
		"name" : "Chinese - Traditional",
		"lang" : "zh-TW",
		"author" : ["froxcey"],
		"author-link" : ["https://github.com/froxcey"],
		"list" : zh_tw,
		"flag" : "🇹🇼"
	}
]

var lang = getCookie("lang");

if (lang == "") {
	var drop = false;
	for(var i = 0; i < window.navigator.languages.length; i++) {
		for (var j = 0; j < langs.length; j++) {
			if (langs[j]["lang"] == window.navigator.languages[i]) { 
				lang = langs[j]["lang"]; 
				drop = true;
				break
			}
		}
		if (drop) {
			break
		}
	}
}

var lang_win = document.querySelector(".lang-container");
langs.forEach(item => {
	var line = document.createElement("div");
	line.classList.add("lang-line");

	var flag = document.createElement("div");
	flag.classList.add("lang-flag");
	flag.innerHTML = item["flag"];

	var lang_name = document.createElement("div");
	lang_name.classList.add("lang-name");
	lang_name.innerHTML = item["name"];

	var lang_authors = document.createElement("div");
	lang_authors.classList.add("lang-authors");
	if (item["author"].length != 0) {
		lang_authors.innerHTML = " by ";
	}

	for (var i = 0; i < item["author"].length; i++) {
		var author = document.createElement("a");
		author.classList.add("author");
		author.href = item["author-link"][i];
		author.innerHTML = item["author"][i];
		lang_authors.appendChild(author);

		if (i < (item["author"].length-1)) {
			lang_authors.innerHTML += ", ";
		}
	}


	line.appendChild(flag);
	line.appendChild(lang_name);
	line.appendChild(lang_authors);
	lang_win.appendChild(line);
});
