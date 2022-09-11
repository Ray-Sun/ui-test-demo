import { JoinPage } from "../../../page_objects/join.page";

describe('Create a new account with invalid input', () => {

    const joinPage = new JoinPage();

    describe('Null value input', () => {

        beforeEach(() => {
            cy.fixture('user').as('account');
        });

        it('Check email', function () {
            joinPage.open();
            joinPage.emailInput.should('be.visible');
            joinPage.joinBtn.should('be.visible').click({ force: true });
            joinPage.emailError.should('be.visible');
        });

        it('Check other input', function () {
            const newEmail = `${(new Date()).getTime()}${this.account.email}`;
            joinPage.emailInput.type(newEmail);
            joinPage.joinBtn.click({ force: true });
            joinPage.passwordInput.should('be.visible');
            joinPage.createAccountBtn.should('be.visible').click();
            joinPage.passwordError.should('be.visible');
            joinPage.firstNameError.should('be.visible');
            joinPage.lastNameError.should('be.visible');
            joinPage.mobileNumberError.should('be.visible');
            joinPage.dateOfBirthNumberError.should('be.visible');
            joinPage.addressError.should('be.visible');
        });

        it('Check address manual input', function () {
            const { street, suburb } = this.account.address;
            joinPage.addressInput.type(`${street} ${suburb}`);
            joinPage.enterAddressManuallyBtn.should('be.visible').click({ force: true });
            joinPage.createAccountBtn.click();
            joinPage.addressLine1Error.should('be.visible');
            joinPage.suburbError.should('be.visible');
            joinPage.postcodeError.should('be.visible');
            joinPage.stateError.should('be.visible');
        });

    });

    describe('Invalid data formate input', () => {

        beforeEach(() => {
            cy.fixture('user').as('account');
        });

        it('Invalid Email', function () {
            joinPage.open();
            joinPage.emailInput.should('be.visible').type(`test@`);
            joinPage.joinBtn.should('be.visible').click({ force: true });
            joinPage.emailError.should('be.visible');
        });

        it('Invalid Password', function () {
            const newEmail = `${(new Date()).getTime()}${this.account.email}`;
            joinPage.emailInput.clear().type(newEmail);
            joinPage.joinBtn.click({ force: true });
            joinPage.emailError.should('not.exist');
            joinPage.passwordInput.should('be.visible');
            joinPage.createAccountBtn.should('be.visible').click();
            joinPage.passwordError.should('be.visible');

            joinPage.passwordInput.click().blur();
            joinPage.passwordLengthError.should('be.visible');
            joinPage.passwordCapitalError.should('be.visible');
            joinPage.passwordNumberError.should('be.visible');
            // for length
            joinPage.passwordInput.type('aaaaaaaa');
            joinPage.passwordLengthError.should('not.exist');
            joinPage.passwordLengthSuccessLabel.should('be.visible');
            // for capital
            joinPage.passwordInput.type('A');
            joinPage.passwordCapitalError.should('not.exist');
            joinPage.passwordCapitalSuccessLabel.should('be.visible');
            // for number
            joinPage.passwordInput.type('1');
            joinPage.passwordNumberError.should('not.exist');
            joinPage.passwordNumberSuccessLabel.should('be.visible');

        });

        it('Other Invalid input', function () {
            // for first name length
            joinPage.firstNameInput.type(this.account.name.first);
            joinPage.firstNameError.should('not.exist');
            joinPage.firstNameInput.clear().type(`f`);
            joinPage.firstNameError.should('be.visible');

            // for last name length
            joinPage.lastNameInput.type(this.account.name.last);
            joinPage.lastNameError.should('not.exist');
            joinPage.lastNameInput.clear().type(`l`);
            joinPage.lastNameError.should('be.visible');
            
            // for mobile formate
            joinPage.mobileNumberInput.type(this.account.mobileNumber);
            joinPage.mobileNumberError.should('not.exist');
            joinPage.mobileNumberInput.clear().type(`123`);
            joinPage.mobileNumberError.should('be.visible');
            
            //for birth date formate
            joinPage.dateOfBirthInput.type(this.account.birthDate);
            joinPage.dateOfBirthNumberError.should('not.exist');
            joinPage.dateOfBirthInput.clear().type(`00/00/0000`);
            joinPage.dateOfBirthNumberError.should('be.visible');
        });

    });

});