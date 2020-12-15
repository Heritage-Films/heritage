function identifyUser() {
    const params = new URLSearchParams(document.location.search.substring(1))
    const uid = params.get('uid') || params.get('cio_id')
    const email = params.get('email')

    if(uid) {
        analytics.reset()
        analytics.identify(uid)
    } else if(email) {
        analytics.reset()
        analytics.identify(null, { email: email })
    }
}

identifyUser()

export default identifyUser