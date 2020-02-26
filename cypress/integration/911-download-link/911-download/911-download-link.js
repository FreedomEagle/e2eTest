import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from '../../../pages/Share911/911-get-share';
import executeCommand from '../../../common/execute-command';
import ResultsPage from '../../../pages/Share911/911-wrong-email';


Given(/^I execute a long task in my database$/, () => {
  executeCommand('db-command-long-task');
});

Given(/^I am at Get_Share_911$/,()=>{
  SearchPage.visit()
})
When(/^I redirect to downloadpage within Resources$/,()=>{
  SearchPage.downloadPage()

});
When(/^ I click the download link for windows$/,()=>{
  SearchPage.downloadLink()
});

When(/^Press 'Search'$/, () => {
  SearchPage.pressSearch();
});

Then(/^I get an error message$/, () => {
  SearchPage.expect().toHaveErrors();  
});

Then(/^I get a downloadlink$/, () => {
  ResultsPage.expect().haveDownloadLink()
})
