function identifyUser() {
    const params = new URLSearchParams(document.location.search.substring(1))
    const uid = params.get('uid') || params.get('cio_id')
    const email = params.get('email')

    if(uid) {
        analytics.identify(uid)
    } else if(email) {
        analytics.identify(null, { email: email })
    }
}

export default identifyUser