var self = require('sdk/self');
// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy; 

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var enabledIconName = "icon";
var disabledIconName = "icoff";


var ssApi = require("sdk/simple-storage");
var storage = ssApi.storage;


if(storage.isEnabled === undefined) {
	storage.isEnabled = true;
}

var isEnabled = storage.isEnabled;
var iconName = isEnabled ? enabledIconName : disabledIconName;

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




function handleClick(state) {
	isEnabled = !isEnabled;
	storage.isEnabled = isEnabled;
	iconName = isEnabled ? enabledIconName : disabledIconName;
	button.icon = {
		"16": "./" + iconName + "-16.png",
		"32": "./" + iconName + "-32.png",
		"64": "./" + iconName + "-64.png"
	}
}

//var tabs = require("sdk/tabs");


function runMyScript(tab) {
	tab.attach({
		contentScriptFile: self.data.url("myScript.js")
	});
}

var onlyFacebook = true;
// Listen for tab loadings.
tabs.on('load', function onOpen(tab) {
	if(isEnabled) {
		if( !onlyFacebook || (tab.url.indexOf("facebook") > -1) ) {
			runMyScript(tab);
		}
		
	}
});


