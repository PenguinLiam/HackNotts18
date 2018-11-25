<template>
  <div class="toast toast-error" v-if="error">
    <button class="btn btn-clear float-right"></button>
    <b>Error:</b> No access token returned from MyMLH. Please try again.
  </div>
</template>

<script>
export default {
  name: "callback",
  data() {
    return {
      access_token: "",
      error: false
    };
  },
  mounted() {
    let self = this;
    self.readAccessToken();
    self.fetchData();
  },
  methods: {
    readAccessToken() {
      const hash = window.location.hash;
      if (hash.length !== 0) {
        this.access_token = hash.split("=")[1].split("&")[0];
        this.$cookie.set("mlh_token", this.access_token);
      } else {
        this.error = true;
      }
    },
    async fetchData() {
      const userData = (await (await fetch(
        `https://my.mlh.io/api/v2/user.json?access_token=${this.access_token}`
      )).json()).data;
      // eslint-disable-next-line no-console]
      this.$router.push({ name: "profile" });
      /*
      console.log(
        await (await this.postData("http://470c3038.ngrok.io/users", {/*
          mlhid: userData.id,
          fname: userData.first_name,
          lname: userData.last_name,
          email: userData.email,
          phone: userData.phone_number
          name: userData.first_name
        })).json()
      );*/
    },
    async postData(url = ``, data = {}) {
      // Default options are marked with *
      return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }); // parses response to JSON
    }
  }
};
</script>

<style scoped>
</style>
