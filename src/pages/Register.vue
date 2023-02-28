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
    <button type="submit">Create account</button>
  </form>
</div>
</template>




    <style>
    .form {
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
    }
    
    .form h2 {
      font-size: 28px;
      margin: 20px 0 20px 0;
      font-weight: normal;
    }
    
    form {
      border: 0.5rem solid #21303f;
      border-radius: 13px;
      padding: 30px;
      background: #2c3e50;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    label {
        text-align: start;
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }
    
    input[type="email"],
    input[type="username"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #e5e5e5;
      font-size: 16px;
      color: #333;
    }
    
    .checkbox label {
      font-weight: normal;
    }
    
    .checkbox{
        display: flex;
        vertical-align: middle;
        
    }
    
    button[type="submit"] {
      background-color: #68ad5c;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }
    
    button[type="submit"]:hover {
      background-color: #328b32;
    }
    
    .form-links {
      margin-top: 20px;
    }
    
    .form-links a {
      margin-right: 10px;
      color: #a9a9a9;
      text-decoration: none;
    }
    
    .form-links a:hover {
      color: #333;
    }
    </style>