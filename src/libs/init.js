import segment from './segment'
import helpscout from './helpscout'

const libs = {
    segment,
    helpscout
}

export default function(x) {
    try {
        if(Array.isArray(x)) {
            for(var i =0; i < x.length; i++) {
                libs[x[i]].call()
            }
        } else {
            libs[x].call()
        }
    } catch(ex) {
        console.log(ex)
    }
}