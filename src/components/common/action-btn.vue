<template>
    <a class="action-btn" :class="colorClass" :title="title">
        <font-awesome-icon :icon="icon"></font-awesome-icon>
    </a>
</template>

<script>
const TYPES = {
    info: {title: 'More', icon: 'info-circle'},
    add: {title: 'Add', icon: 'plus'},
    edit: {title: 'Edit', icon: 'pen'},
    disable: {title: 'Disable', icon: 'ban'},
    enable: {title: 'Enable', icon: 'check'},
    delete: {title: 'Delete', icon: 'times', color: 'red'},
    settings: {title: 'Settings', icon: 'cog'}
}

export default {
    name: "action-btn",
    props: {
        type: {type: String, required: true},
        color: {type: String}
    },
    computed: {
        buttonType() {
            return TYPES[this.type] || {}
        },
        title() {
            return this.buttonType.title
        },
        icon() {
            return this.buttonType.icon
        },
        colorClass() {
            return this.color || this.buttonType.color
        }
    }
}
</script>

<style scoped>
.action-btn {
    text-decoration: none;
    color: #95a5a6 !important;
    padding: .3em;
    cursor: pointer;
}
.action-btn.white {
    color: rgba(255, 255, 255, 0.5) !important;
}
.action-btn:hover {
    color: #2c3e50 !important;
}
.action-btn.white:hover {
    color: #ecf0f1 !important;
}
.action-btn.red:hover {
    color: #e74c3c !important;
}
</style>