<template>
  <div id="app">
    <header class="navbar">
      <section class="navbar-section">
        <a href="/" class="navbar-brand mr-2"><LogoSVG/></a>
        <a href="/" class="btn btn-link">Home</a>
        <a href="/profile" class="btn btn-link">Profile</a>
      </section>
    </header>
    <router-view/>
  </div>
</template>

<script>
import LogoSVG from "@/assets/logo.svg";

export default {
  name: "App",
  components: {
    LogoSVG
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-brand {
  padding: 5px;
}
</style>
