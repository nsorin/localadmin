<template>
    <a class="action-btn" :title="title">
        <i class="fa" :class="icon"></i>
    </a>
</template>

<script>
const TYPES = {
    info: {title: 'More', icon: 'fa-info-circle'},
    add: {title: 'Add', icon: 'fa-plus'},
    edit: {title: 'Edit', icon: 'fa-pencil'},
    disable: {title: 'Disable', icon: 'fa-ban'},
    enable: {title: 'Enable', icon: 'fa-check'},
    delete: {title: 'Delete', icon: 'fa-remove'}
}

export default {
    name: "action-btn",
    props: {
        type: {type: String, required: true},
        size: {type: String, default: 'md'}
    },
    computed: {
        buttonType() {
            return TYPE[this.type] || {}
        },
        title() {
            return this.buttonType.title
        },
        icon() {
            return this.buttonType.icon
        }
    }
}
</script>

<style scoped>
.action-btn {

}
</style>