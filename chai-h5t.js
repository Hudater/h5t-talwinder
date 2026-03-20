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

function removeStyles() {
    // Remove h5t-talwinder style
    const stylesheet = document.querySelector('link[href*="css-reset.css"]');
    if (stylesheet) {
        stylesheet.remove();
    }
    document.getElementById("h5t-talvinder-status").textContent = "Inactive"
    // document.querySelector('link[href*="css-reset.css"]').remove()
    console.log("Darling Darling dil kyu toda! \nOn karo, On karo h5t style thoda")
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
    console.log("User Sahab, styles to badi acchi paal rakhi hain aapne")
}


applyStyles();
