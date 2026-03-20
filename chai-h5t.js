let talwinderActive = false;

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
    console.log("ON")
}

function removeStyles() {
    console.log("OFF")
}
