<template>
    <div>
        <resource-list title="Manage Applications" :model="model" relationships="type" :columns="columns">
            <template v-slot:type="{ data }">
                {{ data.name }}
            </template>
        </resource-list>
    </div>
</template>

<script>
import Application from "../../models/Application"
import ResourceList from "../common/resource-list"

export default {
    name: "applications-main",
    components: {ResourceList},
    data() {
        return {
            model: Application,
            columns: {
                name: {label: 'Application Name'},
                type: {label: 'Type'}
            }
        }
    },
    computed: {
        applications() {
            return Application.query().with(['type']).get()
        }
    },
    mounted() {
        Application.insert({
            data: [
                {id: 1, name: 'Test Vue', type: {id: 1, name: 'Vue'}},
                {id: 2, name: 'Test Spring Boot', type: {id: 2, name: 'Spring Boot'}},
                {id: 3, name: 'Test Laravel', type: {id: 3, name: 'Laravel'}}
            ]
        })
    }
}
</script>