import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <body class="text-center">
      <img class="mb-4" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fdalle2%2Fcomments%2Fwgbgml%2Fa_realistc_photo_of_a_monkey_with_colorful_makeup%2F&psig=AOvVaw18_a3e3JR7GKGqLIQG9Wi-&ust=1694940048185000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCLjTuNzeroEDFQAAAAAdAAAAABAD.jpg" alt="" width="72" height="72"/> 
      <h1 class="h3 mb-3 font-weight-normal">Hey there!! Welcome to my Website</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" />  Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
  </body>
        );
    }
}

export default Login;