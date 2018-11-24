<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login v-if="!loggedIn"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Login
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>
