

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faHeart, faPlus, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart as heartR } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faHeart,
    heartR,
    faTimes,
    faPlus,
    faUser,
    faEye
)

export default{
    install(app){
        app.component('icon', FontAwesomeIcon)
    }
}