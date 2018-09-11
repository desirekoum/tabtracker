<template>
  <div >
    <h2>Register Page</h2>
    <input type="email" name="email" v-model="email" placeholder="enter email"/><br><br>
    <input type="password" name="password" v-model="password" placeholder="enter password"/><br><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      email: "abd",
      password: "pass"
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
