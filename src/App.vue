<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body,html {
  margin: 0;
}

input,
textarea {
    font-size: 16px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

a {
  color: #2c3e50;
}

.color_gray {
    color: gray;
  }
</style>
