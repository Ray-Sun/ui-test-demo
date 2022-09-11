export abstract class BasePage {

    readonly muiBtnLabelSelector = '.MuiButton-label';
    readonly muiListItemSelector = '.MuiListItem-gutters';
    readonly notificationStripSelector = '[data-automation="notification-strip"]';
    readonly notificationStripTitleSelector = '[data-automation="notification-strip-title"]';

    readonly headerSelector: string = '[data-automation="header"]';

    public url = '/';

    public get notificationStrip() { return cy.get(this.notificationStripSelector) };
    public get notificationStripTitle() { return this.notificationStrip.get(this.notificationStripTitleSelector)};

    public get header() { return cy.get(this.headerSelector); }


    public open() {
        cy.visit(this.url);
    }

}