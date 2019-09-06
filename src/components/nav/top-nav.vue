<template>
  <b-navbar type="dark" variant="dark" toggleable="lg">
    <b-navbar-brand href="#">Control Panel</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/applications">Applications</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" pills>
        <b-navbar-brand>
          <action-btn type="settings" color="white"></action-btn>
        </b-navbar-brand>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import ActionBtn from '../common/action-btn'

export default {
  name: 'top-nav',
  components: {ActionBtn}
}
</script>

<style scoped>

</style>
