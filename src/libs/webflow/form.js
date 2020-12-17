function formHandler(formId, func) {
    var form = document.getElementById(formId)
    var formBlock = form.parentElement
    formBlock.classList.remove('w-form')
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        func(callback)
        return false
    })
}

export default formHandler

function callback(error, result) {
    if(error) {
        failureCallback(error)
    } else {
        successCallback(result)
    }
}

function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
}
  
function failureCallback(error) {
    console.error("Error generating audio file: " + error);
}