/// <reference types='cypress' />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../page/loginPage";
import commands from "../../utils/cypressCommands";


Given("acesso ao site", () => {
    loginPage.visitLoginUrl();
});

When("preencher o campo e-mail {}", (email: string) => {
    loginPage.fillEmail(email);
});

When("preencher o campo senha {}", (password: string) => {
    loginPage.fillPassword(password);
});

When("clicar no botão entrar", () => {
    loginPage.clickLogin();
});

When("clicar no botão 'Need an Account?'", () => {
    loginPage.clickNeedAnAccount();
});

Then("deve ser apresentado o texto {}", (text: string) => {
    commands.verifyTextExists(text);
});

Then("deve ser apresentada uma mensagem de erro {}", (errorMessage: string) => {
    loginPage.verifyErrorMessage(errorMessage);
});