import {Model} from '@vuex-orm/core'
import ApplicationType from './ApplicationType'

export default class Application extends Model {

    static entity = 'applications'

    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
            type_id: this.attr(null),
            type: this.belongsTo(ApplicationType, 'type_id')
        }
    }
}