import {Model} from '@vuex-orm/core'

export default class Application extends Model {

    static entity = 'applications'

    static fields() {
        return {
            id: this.attr(null),
            name: this.attr('')
        }
    }

    static methodConf = {
        http: {
            url: '/applications'
        }
    }
}