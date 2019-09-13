import VuexORM from '@vuex-orm/core'
import Application from './models/Application'


const database = new VuexORM.Database()

database.register(Application)

export default database
