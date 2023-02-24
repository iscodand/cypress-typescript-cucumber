/// <reference types="cypress" />

class CypressCommands {

    login(email: string, password: string) : void {
        cy.request('https://api.realworld.io/api/users/login/', {
            email,
            password,
        }).then((response) => {
            window.localStorage.setItem("token", response.body.token);
        });
    };

    visit(url: string) : void {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.visit(url);
    };

    fillField(field: string, text: string) : void {
        cy.get(field).type(text);
    };

    clickButton(button: string) : void {
        cy.get(button).click();
    };

    verifyTextExists(text: string) : void {
        cy.contains(text);
    };

};

const commands = new CypressCommands();
export default commands;