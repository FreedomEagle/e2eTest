import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from '../../../pages/Share911/911-search';
import ResultsPage from '../../../pages/Share911/911-wrong-email';
import executeCommand from '../../../common/execute-command';

Given(/^I execute a long task in my database$/, () => {
  executeCommand('db-command-long-task');
});

Given(/^I am at homepage$/,()=>{
  SearchPage.visit()
})

Given(/^I press forgot password$/,()=>{
  SearchPage.forgotPW()
})

When(/^I input 'myEmail@email.com'$/,() => {
  cy.wait(1000)
  SearchPage.type('myEmail@email.com')
});

When(/^I press search'$/,() => {
  SearchPage.pressSearcb()
});

Then(/^I get an error message$/, () => {
  ResultsPage.expect().toHaveErrors();  
});
