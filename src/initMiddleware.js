function initMiddleware() {
    analytics.addSourceMiddleware(async function({payload, next, integrations}) {
        var ajs_user_traits = JSON.parse(localStorage.getItem('ajs_user_traits'))
        var ajs_user_id = JSON.parse(localStorage.getItem('ajs_user_id'))
        var time_zone = JSON.parse(localStorage.getItem('hf_time_zone'))
        console.log(`Analytic event type: ${payload.type()}`)
        console.log(payload)
        if(ajs_user_traits.email) {
            console.log('ajs_user_traits.email exists.')
            console.log(ajs_user_traits.email)

            console.log(ajs_user_id)
            if( (ajs_user_id === null) || (ajs_user_id?.length !== 24) ) {
                console.log('ajs_user_id ' + ajs_user_id + ' is invalid. Fetch from database.') 
                var url = 'https://api.movieschangepeople.com/api/people/identify/' + encodeURIComponent(ajs_user_traits.email)
                const response = await fetch(url)
                const person = await response.json()
                if(person._id) {
                    console.log('Successfully fetched person from database')
                    console.log(person)

                    var traits = {}
                    traits.email = ajs_user_traits
                    traits.created_at = person.created
                    if(time_zone) { traits.timezone = time_zone }
                    analytics.identify(person._id, traits)

                    if(payload.type() !== 'identify') { next(payload) }
                } else {
                    console.log('Unable to fetch person from database')
                }
            } else {
                console.log('ajs_user_id is valid. call next.')
                next(payload)
            }
        } else {
            console.log('No ajs_user_traits.email found')
        }
    })
}

export default initMiddleware