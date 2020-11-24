function initMiddleware() {
    analytics.addSourceMiddleware(async function({payload, next, integrations}) {
        var ajs_user_traits = JSON.parse(localStorage.getItem('ajs_user_traits'))
        var ajs_user_id = JSON.parse(localStorage.getItem('ajs_user_id'))
        var ip_data = JSON.parse(localStorage.getItem('hf_ip_data'))
        // console.log(`Analytic event type: ${payload.type()}`)
        // console.log(payload)
        if(ajs_user_traits.email) {
            // console.log('ajs_user_traits.email exists.')
            // console.log(ajs_user_traits.email)

            // console.log(ajs_user_id)
            if( (ajs_user_id === null) || (ajs_user_id?.length !== 24) ) {
                // console.log('ajs_user_id ' + ajs_user_id + ' is invalid. Fetch from database.') 
                var url = 'https://api.movieschangepeople.com/api/people/identify/' + encodeURIComponent(ajs_user_traits.email)
                const response = await fetch(url)
                const person = await response.json()
                if(person._id) {
                    // console.log('Successfully fetched person from database')
                    // console.log(person)

                    var traits = {}
                    traits.email = ajs_user_traits.email
                    traits.created_at = person.created
                    if(ip_data) {
                        if(ip_data.country_name) { traits.ip_country_name = ip_data.country_name }
                        if(ip_data.country_code) { traits.ip_country_code = ip_data.country_code }
                        if(ip_data.city) { traits.ip_city = ip_data.city }
                        if(ip_data.region) { traits.ip_region = ip_data.region }
                        if(ip_data.region_code) { traits.ip_region_code = ip_data.region_code }
                        if(ip_data.postal) { traits.ip_postal_code = ip_data.postal }
                        if(ip_data.latitude) { traits.ip_latitude = ip_data.latitude }
                        if(ip_data.longitude) { traits.ip_longitude = ip_data.longitude }
                        if(ip_data.time_zone) { traits.timezone = ip_data.time_zone.name }
                    }
                    analytics.identify(person._id, traits)

                    if(typeof gtag === 'function') {
                        gtag('config', 'G-M0QTVC5740', {
                            'user_id': person._id
                        });
                    }

                    if(payload.type() !== 'identify') { next(payload) }
                } else {
                    // console.log('Unable to fetch person from database')
                }
            } else {
                // console.log('ajs_user_id is valid. call next.')
                next(payload)
            }
        } else {
            // console.log('No ajs_user_traits.email found')
        }
    })
}

export default initMiddleware