var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var enabledIconName = "icon";
var disabledIconName = "icoff";
var iconName = enabledIconName;


var button = buttons.ActionButton({
	id: "csirke-minion-terminator",
	label: "Enable/Disable Minions",
	icon: {
		"16": "./" + iconName + "-16.png",
		"32": "./" + iconName + "-32.png",
		"64": "./" + iconName + "-64.png"
	},
	onClick: handleClick
});





var isEnabled = true;
function handleClick(state) {
	isEnabled = !isEnabled;
	iconName = isEnabled ? enabledIconName : disabledIconName;
	button.icon = {
		"16": "./" + iconName + "-16.png",
		"32": "./" + iconName + "-32.png",
		"64": "./" + iconName + "-64.png"
	}
}

var tabs = require("sdk/tabs");


function runMyScript(tab) {
	tab.attach({
		contentScriptFile: self.data.url("myScript.js")
	});
}

// Listen for tab loadings.
tabs.on('load', function onOpen(tab) {
	if(isEnabled) {
		runMyScript(tab);
	}
});


