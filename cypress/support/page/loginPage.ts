import loginElements from "../elements/loginElements";
import commands from "../../utils/cypressCommands";


const BASE_URL: string = Cypress.env('BASE_URL');

class LoginPage {

    visitLoginUrl(): void {
        commands.cleanVisit(BASE_URL);
        commands.clickButton(loginElements.accessLogin());
    };

    fillEmail(email: string): void {
        commands.fillField(loginElements.emailField(), email);
    };

    fillPassword(password: string): void {
        commands.fillField(loginElements.passwordField(), password);
    };

    clickLogin(): void {
        commands.clickButton(loginElements.loginButton());
    };

    verifyErrorMessage(errorMessage: string): void {
        commands.verifyTextExists(errorMessage);
    };

    clickNeedAnAccount(): void {
        commands.clickButton(loginElements.needAnAccountButton());
    };

};

const loginPage = new LoginPage();
export default loginPage;