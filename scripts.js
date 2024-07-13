;(function () {
    console.log('Bundled Scripts Are Loaded. 71304')

    loadFathomAnalytics()

    function loadFathomAnalytics() {
        const fathomScript = document.createElement('script')
        fathomScript.src = 'https://cdn.usefathom.com/script.js'
        fathomScript.setAttribute('data-site', 'KWZSKWJS')
        fathomScript.defer = true
        document.head.appendChild(fathomScript)
    }
})()
