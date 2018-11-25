<template>
  <div class="home container" style="max-width: 90%">
    <Login v-if="!loggedIn"/>
    <div class="columns" v-for="userBlock of userBlocks" v-bind:key="userBlock[0].id">
      <div class="card column col-4" v-for="user of userBlock" v-bind:key="user.id">
        <div class="card-header">
          <div class="card-title h5">{{`${user.first_name} ${user.last_name}`}}</div>
          <div class="card-subtitle text-gray">{{user.email}}</div>
        </div>
        <div class="card-body">
          {{user.languages}}
        </div>
        <div class="card-footer">
          <p>{{user.uni}}</p>

          <button class="btn btn-primary">Invite to team</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src/
import "spectre.css";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Login
  },
  data() {
    return {
      loggedIn: false,
      userBlocks: new Array(3).fill(
        Array(3).fill({
          first_name: "Lorem",
          last_name: "Ipsum",
          languages: "HTML/CSS/JS, Node, C/C++",
          uni: "University of Nottingham",
          email: "user@example.com"
        })
      )
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
      this.loggedIn =
        (await fetch(
          `https://my.mlh.io/api/v2/user.json?access_token=${token}`
        )).statusText === "OK";
    }
  }
};
</script>
