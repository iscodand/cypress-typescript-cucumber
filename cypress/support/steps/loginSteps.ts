/// <reference types='cypress' />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../page/loginPage";
import commands from "../../utils/cypressCommands";


Given("acesso ao site", () => {
    loginPage.visitLoginUrl();
});

When("preencher o campo e-mail corretamente", () => {
    loginPage.fillEmail('usuario@deteste.com');
});

When("preencher o campo senha corretamente", () => {
    loginPage.fillPassword('123456');
});

When("preencher o campo e-mail incorretamente", () => {
    loginPage.fillEmail('usuario@invalido.com');
});

When("preencher o campo senha incorretamente", () => {
    loginPage.fillPassword('senhaInvalida');
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