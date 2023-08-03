var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
handleDarkmode(darkModeMediaQuery);
function handleDarkmode(e) {
    var darkModeOn = e.matches; // true if dark mode is enabled
    //var favicon = document.querySelector('link[rel="apple-touch-icon"]'); // get favicon-192.png element
    var largeFavicon = document.querySelector('link[rel="icon"]'); // get favicon.ico element
    if (!largeFavicon) {
        return; // where are our favicon elements???
    }
    // replace icons with dark/light themes as appropriate
    if (darkModeOn) {
    //    favicon.href = 'https://cdn.jsdelivr.net/npm/dukewill@0.0.19/images/favicon-dark.png';
        largeFavicon.href = 'https://cdn.jsdelivr.net/npm/dukewill@0.0.19/images/favicon-dark.svg';
    } else {
        //favicon.href = 'https://cdn.jsdelivr.net/npm/dukewill@0.0.19/images/favicon.png';
        largeFavicon.href = 'https://cdn.jsdelivr.net/npm/dukewill@0.0.19/images/favicon.svg';
    }
}
darkModeMediaQuery.addEventListener('change', handleDarkmode);