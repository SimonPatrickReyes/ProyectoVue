<template>
 <div class="form">
  <h2>Create a new account</h2>
  <form>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username"  name="username" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div class="form-group">
      <label for="confirm-password">Confirm password</label>
      <input type="password" id="confirm_password" name="confirm_password" required>
    </div>
    <div class="form-group">
      <label for="birthdate">Birthdate</label>
      <input type="date" id="birthdate" name="birthdate" required>
    </div>
    <div class="form-group">
      <div class="checkbox">
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">I agree to the Terms of Service and Privacy Policy</label>
      </div>
    </div>
    <button type="submit" @click="this.$router.push({name:'Tienda'})">Create account</button>
  </form>
</div>
</template>
