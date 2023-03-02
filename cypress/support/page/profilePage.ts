// @ts-check

import profileElements from "../elements/profileElements";
import commands from "../../utils/cypressCommands";
import mockData from "../../utils/faker";


const PROFILE_URL: string = Cypress.env('PROFILE_URL');

class ProfilePage {

    public bio: string = mockData.generateRandomBio();
    public username: string = mockData.generateRandomUsername();

    visitProfileUrl() {
        commands.visit(PROFILE_URL);
    };

    changeBioContent() {
        commands.clearTextArea(profileElements.changeBioField());
        commands.fillField(profileElements.changeBioField(), this.bio);
    };

    changeUsername(username: string = this.username) {
        commands.clearTextArea(profileElements.changeUsernameField());
        commands.fillField(profileElements.changeUsernameField(), username);
    };

    clickUpdateSettings() {
        commands.clickIfTextExists('Update Settings');
    };

    verifyBioIsUpdated() {
        commands.verifyTextExists(this.bio);
    };

    verifyUsernameIsUpdated() {
        commands.verifyTextExists(this.username);
    };

};

const profilePage = new ProfilePage();
export default profilePage;