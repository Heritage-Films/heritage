import segment from './segment'

const libs = {
    segment
}

export default function(lib) {
    libs[lib].call()
}