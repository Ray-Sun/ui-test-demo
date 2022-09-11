import { BasePage } from "./base.page";

export class AccountPage extends BasePage {
    
    public url: string = '/account';

    readonly accountContainerSelector:string = '[data-automation="account"]';
    readonly signOutBtnSelector:string = '[data-automation="account-sign-out-button"]';

    public get accountContainer() { return cy.get(this.accountContainerSelector);};
    public get signOutBtn() { return cy.get(this.signOutBtnSelector);};
    



}