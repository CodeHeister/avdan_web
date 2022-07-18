# Create content element
```js
var mail_content = document.createElement("div");
mail_content.innerHTML = "Hello, world!";
```

# Add to the app bar
```js
var apps_list_g = [
	{
		// something here
	},
	{
		// maybe something here
	},
	{
		"title" : "Mail",
		"src" : "src/images/demo/icons/Apps/Mail.png",
		"content" : mail_content
	},
	{
		// or maybe something here
	}
]

```

# Load app bar
```js
appBarGenerate(apps_list_g);
```

# Launch on startup
```js
// not recommended because it skips some preparations
makeWindow(mail_content, "src/images/demo/icons/Apps/Mail.png", "Mail", [], undefined, undefined, true)
```