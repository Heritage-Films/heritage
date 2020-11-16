function initMiddleware() {
    analytics.addSourceMiddleware(async function({payload, next, integrations}) {
        var ajs_user_traits = JSON.parse(localStorage.getItem('ajs_user_traits'))
        var ajs_user_id = localStorage.getItem('ajs_user_id')
        console.log(`Analytic event type: ${payload.type()}`)
        console.log(payload)
        if(ajs_user_traits.email) {
            console.log('ajs_user_traits.email exists.')
            console.log(ajs_user_traits.email)
            if( (ajs_user_id === 'null') || (ajs_user_id.length !== 24) ) {
                console.log('ajs_user_id ' + ajs_user_id + ' is invalid. Fetch from database.') 
                var url = 'https://api.movieschangepeople.com/api/people/identify/' + encodeURIComponent(ajs_user_traits.email)
                const response = await fetch(url)
                const person = await response.json()
                if(person._id) {
                    console.log('Successfully fetched person from database')
                    console.log(person)
                    analytics.identify(person._id, {email: ajs_user_traits.email})
                    next(payload)
                    return
                    if(payload.type() === 'identify') {
                        analytics.identify(person._id, {email: ajs_user_traits.email})
                    } else {
                        next(payload)
                    }
                } else {
                    console.log('Unable to fetch person from database')
                }
            } else {
                console.log('ajs_user_id is valid. call next.')
                next(payload)
            }
        }
    })
}

export default initMiddleware