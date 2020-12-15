import segment from './segment'
import helpscout from './helpscout'

const libs = {
    segment,
    helpscout
}

export default function(lib) {
    libs[lib].call()
}