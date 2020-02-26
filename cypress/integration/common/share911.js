import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from '../../pages/Share911/911-search.js'

Given(/^I am at homepage/, () => {
  SearchPage.visit();
});


When(/^I input 'myEmail@email.com'$/,() => {
  SearchPage.type('myEmail@email.com')
});


When(/^Press 'Search'$/, () => {
  SearchPage.pressSearch();
});
