/// <reference types='cypress' />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import profilePage from "../page/profilePage";
import commands from "../../utils/cypressCommands";


Given("realizar login com sucesso", () => {
    commands.login();
});

When("navegar até o perfil do usuário", () => {
    profilePage.visitProfileUrl();
});

When("alterar conteúdo da Bio corretamente", () => {
    profilePage.changeBioContent();
});

When("alterar nome de usuário corretamente", () => {
    profilePage.changeUsername();
});

When("alterar e-mail para um e-mail existente", () => {
    profilePage.changeEmailInvalid();
});

When("salvar a atualização", () => {
    profilePage.clickUpdateSettings();
});

When("clicar no botão de Logout", () => {
    profilePage.clickButtonLogout();
});

Then("a nova bio deve ser apresentada no perfil do usuário", () => {
    profilePage.verifyBioIsUpdated();
});

Then("o novo nome de usuário deve ser apresentado no perfil do usuário", () => {
    profilePage.verifyUsernameIsUpdated();
});

Then("a aplicação deve redirecionar para a tela Home", () => {
    profilePage.verifyLogoutSuccessful();
});