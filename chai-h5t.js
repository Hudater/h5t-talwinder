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

    // Lookup Objects (helper)
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
    const fontWeightMap = {
        'bold': '700',
        'semibold': '600',
        'normal': '400',
        'light': '300'
    };
    const roundedMap = {
        'sm': '2px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        'full': '9999px'
    };
    const alignValues = ['left', 'center', 'right', 'justify'];
    const colors = {
        'red': { '100': '#fee2e2', '200': '#fecaca', '300': '#fca5a5', '400': '#f87171', '500': '#ef4444', '600': '#dc2626', '700': '#b91c1c', '800': '#991b1b', '900': '#7f1d1d' },
        'blue': { '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd', '400': '#60a5fa', '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8', '800': '#1e40af', '900': '#1e3a8a' },
        'green': { '100': '#dcfce7', '200': '#bbf7d0', '300': '#86efac', '400': '#4ade80', '500': '#22c55e', '600': '#16a34a', '700': '#15803d', '800': '#166534', '900': '#14532d' },
        'yellow': { '100': '#fef9c3', '200': '#fef08a', '300': '#fde047', '400': '#facc15', '500': '#eab308', '600': '#ca8a04', '700': '#a16207', '800': '#854d0e', '900': '#713f12' },
        'purple': { '100': '#f3e8ff', '200': '#e9d5ff', '300': '#d8b4fe', '400': '#c084fc', '500': '#a855f7', '600': '#9333ea', '700': '#7e22ce', '800': '#6b21a8', '900': '#581c87' },
        'gray': { '100': '#f3f4f6', '200': '#e5e7eb', '300': '#d1d5db', '400': '#9ca3af', '500': '#6b7280', '600': '#4b5563', '700': '#374151', '800': '#1f2937', '900': '#111827' },
        'orange': { '100': '#ffedd5', '200': '#fed7aa', '300': '#fdba74', '400': '#fb923c', '500': '#f97316', '600': '#ea580c', '700': '#c2410c', '800': '#9a3412', '900': '#7c2d12' },
        'white': '#ffffff', 'black': '#000000'
    };

    // main obj
    const chaiConfig = {
        // Typography
        'text': (parts) => {
            if (alignValues.includes(parts[1])) return { 'text-align': parts[1] };
            if (fontSizeMap[parts[1]]) return { 'font-size': fontSizeMap[parts[1]] };
            if (colors[parts[1]]) return { 'color': colors[parts[1]][parts[2]] };
            if (parts[1] === 'white') return { 'color': '#ffffff' };
            if (parts[1] === 'black') return { 'color': '#000000' };
        },
        'font': (parts) => ({ 'font-weight': fontWeightMap[parts[1]] }),

        // Colors
        'bg': (parts) => {
            if (parts[1] === 'white') return { 'background-color': '#ffffff' };
            if (parts[1] === 'black') return { 'background-color': '#000000' };
            return { 'background-color': colors[parts[1]][parts[2]] };
        },

        // Border
        'border': (parts) => ({
            'border': parts[1] ? `${parts[1] * 1}px solid #d1d5db` : '1px solid #d1d5db'
        }),
        'rounded': (parts) => ({
            'border-radius': parts[1] ? roundedMap[parts[1]] : '4px'
        }),

        // Basic layout utilities
        'flex': () => ({ display: 'flex' }),
        'flex-wrap': () => ({ 'flex-wrap': 'wrap' }),
        'flex-nowrap': () => ({ 'flex-wrap': 'nowrap' }),
        'flex-wrap-reverse': () => ({ 'flex-wrap': 'wrap-reverse' }),
        'flex-row': () => ({ 'flex-direction': 'row' }),
        'flex-col': () => ({ 'flex-direction': 'column' }),
        'grid': () => ({ display: 'grid' }),
        'hidden': () => ({ display: 'none' }),
        'inline': () => ({ display: 'inline' }),
        'inline-block': () => ({ display: 'inline-block' }),
        'block': () => ({ 'display': 'block' }),
        'items-center': () => ({ 'align-items': 'center' }),
        'items-start': () => ({ 'align-items': 'flex-start' }),
        'items-end': () => ({ 'align-items': 'flex-end' }),
        'justify-center': () => ({ 'justify-content': 'center' }),
        'justify-between': () => ({ 'justify-content': 'space-between' }),
        'justify-end': () => ({ 'justify-content': 'flex-end' }),
        'justify-start': () => ({ 'justify-content': 'flex-start' }),
        'gap': (parts) => ({ 'gap': `${parts[1] * 4}px` }),
        'grid-cols': (parts) => ({ 'grid-template-columns': `repeat(${parts[1]}, 1fr)` }),

        // Width
        'w-full': () => ({ 'width': '100%' }),
        'w-1/2': () => ({ 'width': '50%' }),
        'w-1/3': () => ({ 'width': '33.33%' }),
        'w-2/3': () => ({ 'width': '66.66%' }),
        'w-1/4': () => ({ 'width': '25%' }),
        'w-3/4': () => ({ 'width': '75%' }),
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
