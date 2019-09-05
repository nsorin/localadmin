<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <h2>Manage Applications</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="table responsive">
                    <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="application in applications" :key="application.id">
                            <td>{{ application.name }}</td>
                            <td>{{ application.type ? application.type.name : 'None' }}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Application from "../../models/Application"

export default {
    name: "applications-main",
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