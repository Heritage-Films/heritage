function initMiddleware() {
    analytics.addSourceMiddleware(function({payload, next, integrations}) {
        var ajs_user_traits = JSON.parse(localStorage.getItem('ajs_user_traits'))
        var ajs_user_id = localStorage.getItem('ajs_user_id')
        console.log(payload.type())
        if(ajs_user_traits.email) {
          console.log('ajs_user_traits.email exists.')
          console.log(ajs_user_traits.email)
          if( (ajs_user_id === 'null') || (ajs_user_id.length !== 24) ) {
            console.log('ajs_user_id ' + ajs_user_id + ' is invalid. Fetch from database.') 
            var url = 'https://api.movieschangepeople.com/api/people/identify/' + encodeURIComponent(ajs_user_traits.email)
            $.ajax({
              url: url,
              type: 'GET',
              dataType: 'json',
              success: function(data, textStatus, jqXHR) {
                //console.log('Successfully fetched user_id from database.')
                //analytics.identify(data._id, {email: ajs_user_traits.email})
                //next(payload)
                //return
                if(payload.type() === 'identify') {
                  console.log(data)
                  analytics.identify(data._id, {email: ajs_user_traits.email})
                } else {
                  next(payload)
                }
              }
            })
          } else {
            console.log('ajs_user_id is valid. call next.')
            next(payload)
          }
    
        }
      })
}

export default initMiddleware