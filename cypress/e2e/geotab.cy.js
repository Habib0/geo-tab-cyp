/// <reference types="Cypress" />
describe('Page Refresh Test', () => {
  it('Visits the website and refreshes it', () => {
    cy.visit('https://geotab.my.site.com/pxhub/login')
    
    // Create a loop to refresh the page multiple times
    // const refreshCount = 10; // Change this value to set the number of refreshes

    // for (let i = 0; i < refreshCount; i++) {
    //   cy.wait(5000); // Wait for 5 seconds before refreshing (adjust as needed)
    //   cy.reload();
    // }
  });
});
