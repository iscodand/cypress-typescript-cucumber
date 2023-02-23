import loginElements from "../elements/loginElements";
import commands from "../../utils/cypressCommands";


const BASE_URL = Cypress.env('BASE_URL');

class LoginPage {

    visitLoginUrl(): void {
        commands.visit(BASE_URL);
        commands.clickButton(loginElements.accessLogin());
    };

    fillEmail(email: string) : void {
        commands.fillField(loginElements.emailField(), email);
    };

    fillPassword(password: string) : void {
        commands.fillField(loginElements.passwordField(), password);
    };

    clickLogin() : void {
        commands.clickButton(loginElements.loginButton());
    };

    verifyUsernameExists(username: string) : void {
        commands.verifyTextExists(username);
    };

};

const loginPage = new LoginPage();
export default loginPage;