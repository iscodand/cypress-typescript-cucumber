/// <reference types="cypress" />

class CypressCommands {

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