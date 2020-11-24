function trackCioId() {
    const params = new URLSearchParams(document.location.search.substring(1))
    const cio_id = params.get('cio_id')
    console.log(cio_id)
}

trackCioId()

export default trackCioId