import 'core-js/stable'
import 'regenerator-runtime/runtime'
import initMiddleware from './initMiddleware'
import identifyUser from './segment'
import helpscout from './helpscout'

export {
    initMiddleware,
    identifyUser
}