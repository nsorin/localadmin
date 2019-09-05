import VuexORM from '@vuex-orm/core'
import ApplicationType from './models/ApplicationType'
import Application from './models/Application'


const database = new VuexORM.Database()

database.register(Application)
database.register(ApplicationType)

export default database
