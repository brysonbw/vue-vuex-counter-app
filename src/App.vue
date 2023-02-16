<template>
  <div id="app">
    <!-- Router Page/Routes-->
    <router-view />
  </div>
</template>

<style>
body {
  background-color: #1a1a1a;
  color: white;
}
button:hover {
  cursor: pointer;
}

button {
  color: white;
  background-color: #42b983;
  border-radius: 10px;
  border-width: 0;
  padding: 5px 10px 5px 10px;
  font-weight: 700;
}
#app {
  margin-top: 200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
