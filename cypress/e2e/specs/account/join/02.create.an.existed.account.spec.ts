import { JoinPage } from "../../../page_objects/join.page";

describe('Create an account which has existed', () => {

    const joinPage = new JoinPage();

    beforeEach(() => {
        cy.fixture('user').as('account');
    });
    
    it('Fill the form with an email has been signed up', function () {
        joinPage.open();
        joinPage.emailInput.should('be.visible').type(this.account.email);
        joinPage.joinBtn.should('be.visible').click({ force: true });
        joinPage.passwordInput.should('be.visible').type(this.account.password);
        joinPage.firstNameInput.should('be.visible').type(this.account.name.first);
        joinPage.lastNameInput.should('be.visible').type(this.account.name.last);
        joinPage.mobileNumberInput.should('be.visible').type(this.account.mobileNumber);
        joinPage.dateOfBirthInput.should('be.visible').type(this.account.birthDate);
        const { street, suburb} = this.account.address;
        joinPage.addressInput.should('be.visible').type(`${street} ${suburb}`);
        joinPage.suggestAddresses.should('have.length', 1);
        joinPage.enterAddressManuallyBtn.should('be.visible');
        joinPage.suggestAddresses.first().click();
    });
    
    it('Get an error message when try create this account', function () {
        joinPage.createAccountBtn.click();
        joinPage.notificationStripTitle.should('be.visible').invoke('text').should('contain', 'already have');
        joinPage.signInLink.should('be.visible');
        joinPage.resetPasswordLink.should('be.visible');
    });

});