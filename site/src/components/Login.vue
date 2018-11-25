<template>
  <div id="login" class="empty">
    <div class="empty-icon">
      <i class="icon icon-flag"></i>
    </div>
    <p class="empty-title h5">You are not logged in!</p>
    <p class="empty-subtitle">Click the button to log in with MyMLH</p>
    <div class="empty-action">
      <a :href="url" class="btn"><MLHSVG class="logo"/> Login with MyMLH</a>
    </div>
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
        window.location.origin + "/login/callback"
      )}&response_type=token&scope=phone_number+email`
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
