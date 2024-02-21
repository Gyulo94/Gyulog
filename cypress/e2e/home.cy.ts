describe('홈페이지 테스트', () => {
  it('접속', () => {
    cy.visit('/');
    cy.wait(1000);
  });
});
