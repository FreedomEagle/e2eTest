import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from '../../../pages/Share911/911-get-share';

Given(/^I am at Get_Share_911$/,()=>{
  SearchPage.visit()
})

When(/^I redirect to Contact Us page$/,()=>{
  SearchPage.contactPage()

});

When(/^I redirect to Contact Us page$/,()=>{
  SearchPage.contactPage()

});

Then(/^Share911 calendar should be visible$/,()=>{
  SearchPage.calendarVisible()
});

Then(/^Share911 phone number should be visible$/,()=>{
  SearchPage.phoneNumberVisible()
});
