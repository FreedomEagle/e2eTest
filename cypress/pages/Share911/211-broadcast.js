const EMAIL_FIELD = 'input[type=email]';
const PASSWORD_FIELD = 'input[type=password]';
const SUBMIT = 'button[type=submit]'
const QAWebsite = 'https://share112.com/'
const loginPage = 'https://share112.com/e2e/safety'

class LogInPage {
  static login(id,pw) {
    cy.visit(QAWebsite)
    cy.get(EMAIL_FIELD) // 2 seconds
      .type(id) 
    cy.get(SUBMIT).click()  
    cy.get(PASSWORD_FIELD).type(pw)
    cy.get(SUBMIT).click()     
    cy.visit(loginPage)
  }
  static PWSubmit(pw){
    cy.get(PASSWORD_FIELD).type(pw)
  }
  static libertyChannel(){
    cy.contains('Forgot password?').click()
  }
  static Submit(){
    cy.get(SUBMIT).click()
  }

}

export default LogInPage;	
