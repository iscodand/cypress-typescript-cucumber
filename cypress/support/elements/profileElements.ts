class ProfileElements {

    changeBioField = () => { return (':nth-child(3) > .form-control'); };
    changeUsernameField = () => { return (':nth-child(2) > .form-control'); };
    changeEmailField = () => { return ('input[type="email"]'); };

};

const profileElements = new ProfileElements();
export default profileElements;