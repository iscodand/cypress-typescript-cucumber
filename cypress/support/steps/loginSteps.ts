/// <reference types='cypress' />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../page/loginPage";


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

Then("deve ser apresentado o username {}", (username: string) => {
    loginPage.verifyUsernameExists(username);
});