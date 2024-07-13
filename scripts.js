;(function () {
    console.log('Bundled Scripts Are Loaded. 71304')

    const currentURL = window.location

    loadFathomAnalytics()
    if (currentURL.href === 'https://iebarnabas.org/q3-meeting') {
        updateRegistrationSection()
    }

    function loadFathomAnalytics() {
        const fathomScript = document.createElement('script')
        fathomScript.src = 'https://cdn.usefathom.com/script.js'
        fathomScript.setAttribute('data-site', 'KWZSKWJS')
        fathomScript.defer = true
        document.head.appendChild(fathomScript)
    }

    function updateRegistrationSection() {
        // Get the URL parameters
        const params = new URLSearchParams(currentURL.search)

        // Check if the 'fname' parameter is present and not empty
        if (params.has('fname')) {
            // Get the value of the 'fname' parameter
            const fname = params.get('fname')

            // Ensure fname is not empty
            if (fname.trim() !== '') {
                // Find the div with the class 'iebg-registration-section'
                const registrationSection = document.querySelector(
                    '.iebg-registration-section'
                )
                if (registrationSection) {
                    // Add the 'iebg-registration-section--visible' class to the registration section
                    registrationSection.classList.add(
                        'iebg-registration-section--visible'
                    )
                }

                // Find the div with the class 'iebg-registration-section--guest-name'
                const guestNameSection = document.querySelector(
                    '.iebg-registration-section--guest-name'
                )
                if (guestNameSection) {
                    // Replace the text content with the value of the 'fname' parameter
                    guestNameSection.textContent = fname
                }
            }
        }
    }
})()
