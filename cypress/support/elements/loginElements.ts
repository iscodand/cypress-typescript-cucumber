class LoginElements {

    accessLogin = () => { return ('[show-authed="false"] > :nth-child(2) > .nav-link'); };

    needAnAccountButton = () => { return ('p.text-xs-center > [ui-sref="app.register"]'); };

    emailField = () => { return (':nth-child(2) > .form-control'); };
    passwordField = () => { return (':nth-child(3) > .form-control'); };
    loginButton = () => { return ('.btn'); };

}

const loginElements = new LoginElements();
export default loginElements;