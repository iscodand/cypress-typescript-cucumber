class LoginElements {

    accessLogin = () => { return ('[show-authed="false"] > :nth-child(2) > .nav-link'); };

    needAnAccountButton = () => { return ('p.text-xs-center > [ui-sref="app.register"]'); };

    emailField = () => { return ('input[placeholder="Email"]'); };
    passwordField = () => { return ('input[placeholder="Password"]'); };
    loginButton = () => { return ('.btn'); };

}

const loginElements = new LoginElements();
export default loginElements;