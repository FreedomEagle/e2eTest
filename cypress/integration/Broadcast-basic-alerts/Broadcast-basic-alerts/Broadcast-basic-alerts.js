import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import LogInPage from '../../../pages/Share911/211-broadcast';

Given(/^a global administrator named "Adrian"$/,()=>{
   LogInPage.login('e2e@share911.com','carrot horse')
   
})

