import profileElements from "../elements/profileElements";
import commands from "../../utils/cypressCommands";
import mockData from "../../utils/faker";


const PROFILE_URL: string = Cypress.env('PROFILE_URL');

class ProfilePage {

    public bio: string = mockData.generateRandomBio();
    public username: string = mockData.generateRandomUsername();

    visitProfileUrl(): void {
        commands.visit(PROFILE_URL);
    };

    changeBioContent(): void {
        commands.clearTextArea(profileElements.changeBioField());
        commands.fillField(profileElements.changeBioField(), this.bio);
    };

    changeUsername(username: string = this.username): void {
        commands.clearTextArea(profileElements.changeUsernameField());
        commands.fillField(profileElements.changeUsernameField(), username);
    };

    changeEmailInvalid(email: string = 'user@email.com'): void {
        commands.clearTextArea(profileElements.changeEmailField());
        commands.fillField(profileElements.changeEmailField(), email);
    }

    clickUpdateSettings(): void {
        commands.clickIfTextExists('Update Settings');
    };

    clickButtonLogout(): void {
        commands.clickIfTextExists('Or click here to logout.')
    };

    verifyBioIsUpdated(): void {
        commands.verifyTextExists(this.bio);
    };

    verifyUsernameIsUpdated(): void {
        commands.verifyTextExists(this.username);
    };

    verifyLogoutSuccessful(): void {
        commands.textShouldNotBeVisible(this.username);
    };

};

const profilePage: ProfilePage = new ProfilePage();
export default profilePage;