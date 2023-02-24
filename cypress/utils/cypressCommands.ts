/// <reference types="cypress" />


class CypressCommands {

    login() {
        let request = {
            "user": {
                "email": "usuario@deteste.com",
                "password": "123456",
            }
        };

        cy.request('POST',
                   'https://api.realworld.io/api/users/login',
                   request)
                   .then((response) => {
                   window.localStorage.setItem("jwtToken", response.body.user.token);
        });
    };

    visit(url: string) : void {
        cy.visit(url);
    };

    cleanVisit(url: string) : void {
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

    clickIfTextExists(text: string) : void {
        cy.contains(text).click();
    };

    clearTextArea(field: string) : void {
        cy.get(field).clear();
    };

};

const commands = new CypressCommands();
export default commands;