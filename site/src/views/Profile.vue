<template>
  <div class="profile container">

    <h3>Profile</h3>
    <Login v-if="!loggedIn"/>
    <div class="row" v-else>
      <div class="card col-4 col-mx-auto">
        <div class="card-header">
          <div class="card-title h5">{{`${userData.first_name} ${userData.last_name}`}}</div>
          <div class="card-subtitle text-gray">{{userData.email}}</div>
        </div>
        <div class="card-body">
          {{userData.phone_number}}
        </div>
        <div class="card-footer">
          {{userData.id}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "spectre.css";
import Login from "@/components/Login";

export default {
  name: "Profile",
  components: {
    Login
  },
  data() {
    return {
      loggedIn: false,
      userData: {}
    };
  },
  mounted() {
    const self = this;
    self.checkLogin();
  },
  methods: {
    async checkLogin() {
      const token = this.$cookie.get("mlh_token");
      if (!token) return;
      const data = await fetch(
        `https://my.mlh.io/api/v2/user.json?access_token=${token}`
      );
      this.loggedIn = data.statusText === "OK";
      if (this.loggedIn) this.userData = (await data.json()).data;
    }
  }
};
</script>

<style scoped src="">
</style>
