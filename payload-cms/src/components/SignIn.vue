<template>
  <div class="wrapper">
    <header>
      <h1>Payload Vue</h1>
    </header>

    <main>
      <h3>Sign In</h3>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" name="email" type="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" name="password" type="password" required />
        </div>
        <div class="ion-text-center">
          <button type="submit">Sign In</button>
          <button type="button" @click="router.push('/sign-up')">Create A New Account</button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  try {
    const resp = await fetch("http://localhost:3200/api/customers/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message;
      throw new Error(errorMsg);
    }

    const user = await resp.json();
    console.log(user);

    // goto home
    router.replace("/home");
  } catch (error: any) {
    alert("Sign In Error " + error.message);
  }
};
</script>

<style scoped>

h1 {
  color: white;
}

main {
  margin-top: 20px;
}

h3 {
  margin-left: 16px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 16px;
}
</style>
