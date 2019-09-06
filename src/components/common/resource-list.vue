<template>
    <div>
        <div class="row">
            <div class="col-sm-12 text-left">
                <slot name="header">
                    <h2>{{ title }}</h2>
                </slot>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="table-responsive resource-table-container">
                    <table class="table table-striped table-bordered resource-table">
                    <thead>
                        <tr>
                            <th v-for="(column, key) in columns" :key="key">
                                {{ column.label }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <td v-for="(column, key) in columns" :key="key">
                                <slot :name="key" :data="item[key]" :item="item">
                                    {{ item[key] }}
                                </slot>
                            </td>                 
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "resource-list",
    props: {
        model: {required: true},
        title: {default: ''},
        relationships: {type: String|Array, default: null},
        columns: {type: Object, required: true}
    },
    computed: {
        items() {
            return this.model.query().with(this.relationships).get()
        }
    }
}
</script>

<style scoped>
.resource-table {
    text-align: left;
}

.resource-table-container {
    padding: 20px 0;
}
</style>