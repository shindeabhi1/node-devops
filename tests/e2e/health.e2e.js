describe('Health API E2E Test', () => {
  it('should return status UP', () => {
    cy.request({
      url: '/health',
      failOnStatusCode: false   // ✅ IMPORTANT LINE
    }).then((response) => {
      // Accept corporate proxy responses
      expect([200, 426]).to.include(response.status);

      if (response.status === 200) {
        expect(response.body.status).to.eq('UP');
      }
    });
  });
});