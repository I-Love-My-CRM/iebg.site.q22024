;(function () {
    console.log('Bundled Scripts Are Loaded. 71304')

    const currentURL = window.location

    loadFathomAnalytics()

    function loadFathomAnalytics() {
        const fathomScript = document.createElement('script')
        fathomScript.src = 'https://cdn.usefathom.com/script.js'
        fathomScript.setAttribute('data-site', 'DTEWFXQW')
        fathomScript.defer = true
        document.head.appendChild(fathomScript)
    }
})()
