declare const chrome: any;

var browser = browser || chrome;

/**
This script is run whenever the devtools are open.
In here, we can create our panel.
*/

function handleShown() {
}

function handleHidden() {
}

/**
Create a panel, and add listeners for panel show/hide events.
*/
browser.devtools.panels.create(
  "Just Animate",
  "icons/star.png",
  "panel/panel.html"
).then((newPanel) => {
  newPanel.onShown.addListener(handleShown);
  newPanel.onHidden.addListener(handleHidden);
});  