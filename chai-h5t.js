let talwinderActive = true;

function toggleTalwinder() {
    if (!talwinderActive) {
        applyTalwinderStyles();
        talwinderActive = true;
    } else {
        removeTalwinderStyles();
        talwinderActive = false;
    }
}

function removeTalwinderStyles() {
    // Remove h5t-talwinder style
    const stylesheet = document.querySelector('link[href*="css-reset.css"]');
    if (stylesheet) {
        stylesheet.remove();
    }
    document.getElementById("h5t-talvinder-status").textContent = "Inactive"
    // document.querySelector('link[href*="css-reset.css"]').remove()
    console.log("Darling Darling dil kyu toda! \nOn karo, On karo h5t style thoda")
}

function applyTalwinderStyles() {

    // load reset stylesheet
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css-reset.css';
    head.appendChild(link);
    document.getElementById("h5t-talvinder-status").textContent = "Active"

    // Lookup Objects
    const colorsMap = {}
    
    const fontWeightMap = {}
    const roundedMap = {}
    const fontSizeMap = {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
    }
    const fontAlignMap = {

    }
    const chaiConfig = {
        // Typography
        'text': (parts) => ({
            'font-size': fontSizeMap[parts[1]],
        }),

        rounded: (parts) => ({
            borderRadius: parts[1] ? roundedMap[parts[1]] : '4px'
        }),
        bg: (parts) => ({
            backgroundColor: colors[parts[1]][parts[2]]
        }),

        // Basic layout utilities
        'flex': () => ({ display: 'flex' }),
        'flex-wrap': () => ({ 'flex-wrap': 'wrap' }),
        'flex-nowrap': () => ({ 'flex-wrap': 'nowrap' }),
        'flex-wrap-reverse': () => ({ 'flex-wrap': 'wrap-reverse' }),
        'flex-row': () => ({ 'flex-direction': 'row' }),
        'grid': () => ({ display: 'grid' }),
        'hidden': () => ({ display: 'none' }),
        'inline': () => ({ display: 'inline' }),
        'inline-block': () => ({ display: 'inline-block' }),

        // Spacing
        'px': (parts) => ({
            'padding-left': `${parts[1] * 4}px`,
            'padding-right': `${parts[1] * 4}px`
        }),
        'py': (parts) => ({
            'padding-top': `${parts[1] * 4}px`,
            'padding-bottom': `${parts[1] * 4}px`
        }),
        'pt': (parts) => ({
            'padding-top': `${parts[1] * 4}px`,
        }),
        'pb': (parts) => ({
            'padding-bottom': `${parts[1] * 4}px`,
        }),
        'pl': (parts) => ({
            'padding-left': `${parts[1] * 4}px`,
        }),
        'pr': (parts) => ({
            'padding-right': `${parts[1] * 4}px`,
        }),
        'p': (parts) => ({
            'padding': `${parts[1] * 4}px`,
        }),
        'mx': (parts) => ({
            'margin-left': `${parts[1] * 4}px`,
            'margin-right': `${parts[1] * 4}px`
        }),
        'my': (parts) => ({
            'margin-top': `${parts[1] * 4}px`,
            'margin-bottom': `${parts[1] * 4}px`
        }),
        'mt': (parts) => ({
            'margin-top': `${parts[1] * 4}px`,
        }),
        'mb': (parts) => ({
            'margin-bottom': `${parts[1] * 4}px`,
        }),
        'ml': (parts) => ({
            'margin-left': `${parts[1] * 4}px`,
        }),
        'mr': (parts) => ({
            'margin-right': `${parts[1] * 4}px`,
        }),
        'm': (parts) => ({
            'margin': `${parts[1] * 4}px`,
        }),
    };

    // Get all classes and filter by 'chai-'
    var allClasses = [];
    var allElements = document.querySelectorAll('*');
    for (var i = 0; i < allElements.length; i++) {
        var classes = allElements[i].className.toString().toLowerCase().split(/\s+/);
        for (var j = 0; j < classes.length; j++) {
            var cls = classes[j];
            if (cls && allClasses.indexOf(cls) === -1 && cls.includes("chai-"))
                allClasses.push(cls);
        }
    }
    // console.log(allClasses);

    // 


    console.log("User Sahab, styles to badi acchi laga rakhi hain aapne")
}


applyTalwinderStyles();
