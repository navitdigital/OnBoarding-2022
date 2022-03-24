Given(/^que eu acesse o mapa$/, () => {
  cy.visit('/');
  cy.title().should('equal', 'Google Maps');
  cy.url().should('contains', 'maps');
});

When(/^eu digitar o local "([^"]*)"$/, (local) => {
  cy.wait(500);
  cy.get('input[aria-label="Pesquise no Google Maps"]')
    .should('not.be.disabled')
    .type(local);
});

When(/^selecionar o local "([^"]*)" na lista de buscar$/, (local) => {
  cy.get('div[role="row"]').contains(local).click();
});

Then(/^o local "([^"]*)" deve ser indicado no mapa$/, (local) => {
  cy.get(`div[aria-label="${local}"]`)
    .should('be.visible')
    .within(() => {
      cy.contains(local).should('be.visible');
    });
});
