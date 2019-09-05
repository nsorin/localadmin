import {Model} from '@vuex-orm/core'

export default class ApplicationType extends Model {

    static entity = 'application_types'

    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
            dockerfile: this.attr('')
        }
    }
}