<template>
  <div id="login">
    <a href="#" class="btn"><MLHSVG class="logo"/> Login with MLH</a>
  </div>
</template>

<script>
import "spectre.css";
import MLHSVG from "@/assets/mlh.svg";
export default {
  name: "Login",
  components: {
    MLHSVG
  },
  data() {
    return {
      url: `https://my.mlh.io/oauth/authorize?client_id=30d432a51dab16b788af5145e7c818a5154ebb282f93d6c862b2f3d4d71eb930&redirect_uri=${encodeURI(
        window.location.host + "/login/callback"
      )}&response_type=code&scope=phone_number+email+event`
    };
  }
};
</script>

<style scoped>
.logo {
  width: 30px;
  margin-right: 10px;
}
.btn {
  display: inline-flex;
  align-items: center;
}
</style>
