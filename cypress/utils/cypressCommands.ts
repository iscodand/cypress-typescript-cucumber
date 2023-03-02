/// <reference types="cypress" />


class CypressCommands {

    login(): void {
        const email: string = Cypress.env('email');
        const password: string = Cypress.env('password');

        let request = {
            "user": {
                "email": email,
                "password": password,
            }
        };

        cy.request('POST',
            'https://api.realworld.io/api/users/login',
            request)
            .then((response) => {
                window.localStorage.setItem("jwtToken", response.body.user.token);
            });
    };

    visit(url: string): void {
        cy.visit(url);
    };

    cleanVisit(url: string): void {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.visit(url);
    };

    fillField(field: string, text: string): void {
        cy.get(field).type(text);
    };

    clickButton(button: string): void {
        cy.get(button).click();
    };

    verifyTextExists(text: string): void {
        cy.contains(text);
    };

    textShouldNotBeVisible(text: string): void {
        cy.contains(text).should('not.exist');
    };

    clickIfTextExists(text: string): void {
        cy.contains(text).click();
    };

    clearTextArea(field: string): void {
        cy.get(field).clear();
    };

};

const commands = new CypressCommands();
export default commands;