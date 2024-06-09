/* Wrpapped in an IIFE */
;(function () {
    console.log('Bundled Scripts is loaded')

    loadFathomAnalytics()
    loadChatWidget()

    function loadFathomAnalytics() {
        const fathomScript = document.createElement('script')
        fathomScript.src = 'https://cdn.usefathom.com/script.js'
        fathomScript.setAttribute('data-site', 'KWZSKWJS')
        fathomScript.defer = true
        document.head.appendChild(fathomScript)
    }

    function loadChatWidget() {
        const chatWidget = document.createElement('chat-widget')
        chatWidget.setAttribute('location-id', 'ZKygzohaM4P2OKUT0tgZ')
        chatWidget.setAttribute(
            'style',
            '--chat-widget-primary-color: #02AD88; --chat-widget-active-color:#02AD88 ;--chat-widget-bubble-color: #02AD88 ;'
        )
        chatWidget.setAttribute('heading', 'How can we help?')
        chatWidget.setAttribute('sub-heading', 'Enter your question below.')
        chatWidget.setAttribute(
            'prompt-msg',
            'Hi there, have a question? Message us here.'
        )
        chatWidget.setAttribute('use-email-field', 'true')
        chatWidget.setAttribute('support-contact', 'Call or Text: 866 51 GUIDE')
        chatWidget.setAttribute('success-msg', 'We will contact you shortly.')
        chatWidget.setAttribute('thank-you-msg', 'Thank you for reaching out.')
        chatWidget.setAttribute(
            'prompt-avatar',
            'https://images.leadconnectorhq.com/image/f_webp/q_100/r_45/u_https://cdn.filesafe.space/locationPhotos%2FZKygzohaM4P2OKUT0tgZ%2Fchat-widget-person?alt=media&token=32d5da4d-aced-4cfd-aa5d-11c071916bae'
        )
        chatWidget.setAttribute('agency-name', 'I Love My CRM')
        chatWidget.setAttribute('agency-website', 'https://ilovemycrm.com')
        chatWidget.setAttribute('send-label', 'Connect')
        chatWidget.setAttribute('primary-color', '#02AD88')
        chatWidget.setAttribute('show-consent-checkbox', 'true')
        document.body.appendChild(chatWidget)

        const chatWidgetLoader = document.createElement('script')
        chatWidgetLoader.src = 'https://widgets.leadconnectorhq.com/loader.js'
        chatWidgetLoader.setAttribute(
            'data-resources-url',
            'https://widgets.leadconnectorhq.com/chat-widget/loader.js'
        )
        document.body.appendChild(chatWidgetLoader)
    }
})()
