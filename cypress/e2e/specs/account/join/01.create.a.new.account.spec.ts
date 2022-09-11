import { AccountPage } from "../../../page_objects/account.page";
import { JoinPage } from "../../../page_objects/join.page";

describe('Create a brand new account', { tags: '@smoke' }, () => {

    const joinPage = new JoinPage();
    const accountPage = new AccountPage();

    beforeEach(() => {
        cy.fixture('user').as('account');
    });

    it('Check the form elements on the Join Page', function () {
        joinPage.open();
        joinPage.emailInput.should('be.visible');
        joinPage.joinBtn.should('be.visible');
        joinPage.createAccountLink.should('be.visible');
        joinPage.joinPrivacyLink.should('be.visible');
        joinPage.joinTermsLink.should('be.visible');
        joinPage.myerOneJoinTermsLink.should('be.visible');
    });

    it('Get more form items after input a brand new email address', function () {
        // Use timestamp to make sure we can have a brand new email address
        const newEmail = `${(new Date()).getTime()}${this.account.email}`;
        joinPage.emailInput.type(newEmail);
        joinPage.joinBtn.click({ force: true });
        // Check more form elements appear on the page
        joinPage.passwordInput.should('be.visible');
        joinPage.firstNameInput.should('be.visible');
        joinPage.lastNameInput.should('be.visible');
        joinPage.mobileNumberInput.should('be.visible');
        joinPage.dateOfBirthInput.should('be.visible');
        joinPage.addressInput.should('be.visible');
        joinPage.createAccountBtn.should('be.visible');
        joinPage.loginLink.should('be.visible');
    });

    it('Fill the create account form except Address', function () {
        joinPage.passwordInput.type(this.account.password);
        joinPage.firstNameInput.type(this.account.name.first);
        joinPage.lastNameInput.type(this.account.name.last);
        joinPage.mobileNumberInput.type(this.account.mobileNumber);
        joinPage.dateOfBirthInput.type(this.account.birthDate);
    });

    it('Input Address Info', function () {
        // Check we can input the address by Address Finder
        const { street, suburb, state, postcode } = this.account.address;
        joinPage.addressInput.type(`${street} ${suburb}`);
        joinPage.suggestAddresses.should('have.length', 1);
        joinPage.enterAddressManuallyBtn.should('be.visible');
        joinPage.suggestAddresses.first().click();
        joinPage.addressInput.should(($input) => {
            const val = $input.val();
            expect(val).to.include(street);
            expect(val).to.include(suburb);
            expect(val).to.include(state);
            expect(val).to.include(postcode);
        });

        // Check we can input the address manually
        joinPage.addressInput.clear();
        joinPage.addressInput.type(`${street} ${suburb}`);
        joinPage.enterAddressManuallyBtn.should('be.visible');
        joinPage.enterAddressManuallyBtn.click({ force: true });
        joinPage.useAddressFinderBtn.should('be.visible');
        joinPage.addressLine1Input.type(street);
        joinPage.suburbInput.type(suburb);
        joinPage.postcodeInput.type(postcode);
        joinPage.stateInput.click();
        joinPage.stateList.should('be.visible');
        joinPage.stateItems.contains(state).click();
    });

    it('We can create one brand new account', function () {
        joinPage.createAccountBtn.click();
        cy.url().should('include', accountPage.url);
        accountPage.accountContainer.should('be.visible');
        accountPage.signOutBtn.should('be.visible');
    });

});