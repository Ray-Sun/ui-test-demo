import { BasePage } from "./base.page";

export class JoinPage extends BasePage {
    
    public url: string = '/join';

    readonly formSelector:string = '[data-automation="single-sign-up-form"]';
    readonly emailInputSelector:string = '#email';
    readonly emailErrorSelector:string = '#email-error-text';

    // Password items
    readonly passwordInputSelector:string = '#password';
    readonly passwordErrorSelector:string = '#password-error-text';
    readonly passwordLengthErrorSelector:string = '[data-automation="pw-strength-length-error"]';
    readonly passwordCapitalErrorSelector:string = '[data-automation="pw-strength-capital-error"]';
    readonly passwordNumberErrorSelector:string = '[data-automation="pw-strength-number-error"]';
    readonly passwordLengthSuccessLabelSelector:string = '[data-automation="pw-strength-length-success"]';
    readonly passwordCapitalSuccessLabelSelector:string = '[data-automation="pw-strength-capital-success"]';
    readonly passwordNumberSuccessLabelSelector:string = '[data-automation="pw-strength-number-success"]';

    readonly firstNameInputSelector:string = '#first-name';
    readonly firstNameErrorSelector:string = '#first-name-error-text';
    readonly lastNameInputSelector:string = '#last-name';
    readonly lastNameErrorSelector:string = '#last-name-error-text';
    readonly mobileNumberInputSelector:string = '#mobile-phone';
    readonly mobileNumberErrorSelector:string = '#mobile-phone-error-text';
    readonly dateOfBirthInputSelector:string = '#date-of-birth';
    readonly dateOfBirthNumberErrorSelector:string = '#date-of-birth-error-text';
    
    // Address Input items
    readonly addressInputSelector:string = '#address';
    readonly addressErrorSelector:string = '#address-error-text';
    readonly enterAddressManuallyBtnText:string = 'Enter Address Manually';
    readonly useAddressFinderBtnText:string = 'Use Address Finder';
    readonly addressLine1InputSelector:string = '#addressLine1';
    readonly addressLine1ErrorSelector:string = '#addressLine1-error-text';
    readonly addressLine2InputSelector:string = '#addressLine2';
    readonly suburbInputSelector:string = '#city';
    readonly suburbErrorSelector:string = '#city-error-text';
    readonly postcodeInputSelector:string = '#postcode';
    readonly postcodeErrorSelector:string = '#postcode-error-text';
    readonly stateInputSelector:string = '#stateCode';
    readonly stateErrorSelector:string = '#stateCode-error-text';
    readonly stateListSelector:string = '#menu-stateCode ul';
    
    readonly joinTermsLinkSelector:string = '[data-automation="join-terms-link"]';
    readonly joinPrivacyLinkSelector:string = '[data-automation="join-privacy-link"]';
    readonly myerOneJoinTermsLinkSelector:string = '[data-automation="myer-one-join-terms-link"]';
    readonly joinBtnText:string = 'JOIN';
    readonly createAccountBtnSelector:string = '#create-account';
    readonly createAccountLinkText:string = 'Create Account';
    readonly loginLinkText:string = 'Login';
    readonly signInLinkText:string = 'Signing In';
    readonly resetPasswordLinkText:string = 'resetting your password';

    public get emailInput() { return cy.get(this.emailInputSelector); }
    public get emailError() { return cy.get(this.emailErrorSelector); }

    // Password Elements 
    public get passwordInput() { return cy.get(this.passwordInputSelector); }
    public get passwordError() { return cy.get(this.passwordErrorSelector); }
    public get passwordLengthError() { return cy.get(this.passwordLengthErrorSelector); }
    public get passwordCapitalError() { return cy.get(this.passwordCapitalErrorSelector); }
    public get passwordNumberError() { return cy.get(this.passwordNumberErrorSelector); }
    public get passwordLengthSuccessLabel() { return cy.get(this.passwordLengthSuccessLabelSelector); }
    public get passwordCapitalSuccessLabel() { return cy.get(this.passwordCapitalSuccessLabelSelector); }
    public get passwordNumberSuccessLabel() { return cy.get(this.passwordNumberSuccessLabelSelector); }
    
    public get firstNameInput() { return cy.get(this.firstNameInputSelector); }
    public get firstNameError() { return cy.get(this.firstNameErrorSelector); }
    public get lastNameInput() { return cy.get(this.lastNameInputSelector); }
    public get lastNameError() { return cy.get(this.lastNameErrorSelector); }
    public get mobileNumberInput() { return cy.get(this.mobileNumberInputSelector); }
    public get mobileNumberError() { return cy.get(this.mobileNumberErrorSelector); }
    public get dateOfBirthInput() { return cy.get(this.dateOfBirthInputSelector); }
    public get dateOfBirthNumberError() { return cy.get(this.dateOfBirthNumberErrorSelector); }
    
    // Address Elements
    public get addressInput() { return cy.get(this.addressInputSelector); }
    public get addressError() { return cy.get(this.addressErrorSelector); }
    public get suggestAddresses() { return cy.get(this.formSelector).get(this.muiListItemSelector); }
    public get enterAddressManuallyBtn() { return cy.get(this.muiBtnLabelSelector).contains(this.enterAddressManuallyBtnText); }
    public get useAddressFinderBtn() { return cy.get(this.muiBtnLabelSelector).contains(this.useAddressFinderBtnText); }
    public get addressLine1Input() { return cy.get(this.addressLine1InputSelector); }
    public get addressLine1Error() { return cy.get(this.addressLine1ErrorSelector); }
    public get addressLine2Input() { return cy.get(this.addressLine2InputSelector); }
    public get suburbInput() { return cy.get(this.suburbInputSelector); }
    public get suburbError() { return cy.get(this.suburbErrorSelector); }
    public get postcodeInput() { return cy.get(this.postcodeInputSelector); }
    public get postcodeError() { return cy.get(this.postcodeErrorSelector); }
    public get stateInput() { return cy.get(this.stateInputSelector); }
    public get stateError() { return cy.get(this.stateErrorSelector); }
    public get stateList() { return cy.get(this.stateListSelector); }
    public get stateItems() { return this.stateList.get('li'); }

    public get joinTermsLink() { return cy.get(this.joinTermsLinkSelector); }
    public get joinPrivacyLink() { return cy.get(this.joinPrivacyLinkSelector); }
    public get myerOneJoinTermsLink() { return cy.get(this.myerOneJoinTermsLinkSelector); }
    public get joinBtn() { return cy.get(this.muiBtnLabelSelector).contains(this.joinBtnText); }
    public get createAccountBtn() { return cy.get(this.createAccountBtnSelector); }
    public get createAccountLink() { return cy.get(this.muiBtnLabelSelector).contains(this.createAccountLinkText); }
    public get loginLink() { return cy.get(this.muiBtnLabelSelector).contains(this.loginLinkText); }
    public get signInLink() { return this.notificationStrip.get('span').contains(this.signInLinkText); }
    public get resetPasswordLink() { return this.notificationStrip.get('span').contains(this.resetPasswordLinkText); }

}