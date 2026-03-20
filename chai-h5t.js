let talwinderActive = true;

function toggleTalwinder() {
    if (!talwinderActive) {
        applyStyles();
        talwinderActive = true;
    } else {
        removeStyles();
        talwinderActive = false;
    }
}

function applyStyles() {

    // load reset stylesheet
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css-reset.css';
    head.appendChild(link);
    document.getElementById("h5t-talvinder-status").textContent = "Active"
    console.log("ON")
}

function removeStyles() {
    const stylesheet = document.querySelector('link[href*="css-reset.css"]');

    // Check if the element exists before attempting removal
    if (stylesheet) {
        stylesheet.remove();
    }
    document.getElementById("h5t-talvinder-status").textContent = "Inactive"
    // document.querySelector('link[href*="css-reset.css"]').remove()
    console.log("OFF")
    // alert("!");
}

applyStyles();
