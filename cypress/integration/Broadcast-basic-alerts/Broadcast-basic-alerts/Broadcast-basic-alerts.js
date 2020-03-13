import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import Share112 from '../../../pages/Share911/112-broadcast';

Given(`I visit the app`,() => {
   cy.viewport(2560, 1600)
   Share112.visit()
})
Given(`an administrative member of {string} channel logs in with the info {string},{string}`, (channel, emailAddress, password) => {
   Share112.loginInitial(emailAddress,password)
   Share112.checkChannel(channel)
})
Given(`the {string} channel has the type {string} with the zipcode {string}`, (channel, type, zipcode) => {
   Share112.accessChannel(channel)
   Share112.checkChannelInfo('type',type)
   Share112.checkAddress('zip',zipcode)
})
And(`a regular member {string} belongs to the channel {string} with the phone number {string}`, (name, channel, phoneNumber) => {
   Share112.accessChannel(channel)
   cy.lookFor(name)
   Share112.checkUserProperty(name,phoneNumber)
})
And(`the regular user {string} from {string} channel is authorized to {string}`, (name, channel, permission) => {
   Share112.checkUserProperty(name,permission)
})
And(`a regular member {string} is invited to the channel with email {string}, the password {string}, and the phone number {string}`, (name,email,password,phoneNumber) => {
   cy.inviteUser(email,password)
   Share112.addName(name)
   cy.lookFor(name)
   Share112.addPhone(phoneNumber)
})
Given(`the response agency {string}'s number {string} is added to the {string} emergency voice calls`, (responseAgency, phoneNumber, channel) => {
   Share112.accessChannel(channel)
   Share112.addVoiceCalls(responseAgency,phoneNumber)
})
Given(`the respondant {string} belongs to {string} at {string} with the password {string} with phone number {string}`, (respondant, responseAgency, email, password, phoneNum) => {
   Share112.logOutandIn(email,password)
   Share112.checkName(respondant)
   Share112.checkAgencyName(responseAgency)
})
And(`the response agency shares the zipcode {string}`, (zipcode) => {
   Share112.checkAgencyZip(zipcode)
})
When(`the {string} logs in through {string} with the password {string}`, (name,email,password) => {
   Share112.logOutandIn(email,password)
   Share112.checkName(name)
})
And(`broadcasts a {string} alert for the {string} channel`, (alert,channel) => {
   //Share112.broadCastAlert(channel,alert)
})
Then(`everyone in the channel {string} including respondant officers gets sent a text and an email by the app`, (channel) => {
   Share112.checkCallReport(channel)
   // Share112.checkSMSandText()
})
Then(`the response agency {string} is called`, (responseAgency) => {
   Share112.checkCallLog(responseAgency)
})
And(`an administrative user {string} with the password a {string} gets {string} alert on his app for {string} channel`, (email,password,alertType,channel) => {
   Share112.logOutandIn(email,password)
   Share112.checkAlert(channel, alertType)
})
And(`a regular user {string} with the password {string} gets {string} alert on his app for {string} channel`, (email,password,alertType,channel) => {
   Share112.logOutandIn(email,password)
   Share112.checkAlert(channel, alertType)
})
And(`just registered regular user {string} with the password {string} gets {string} alert on his app for {string} channel`, (email,password,alertType,channel) => {
   Share112.logOutandIn(email,password)
   Share112.checkAlert(channel, alertType)
})
And(`the administrator {string} with {string} removes {string} from {string} channel`, (email,password,removedUser,channel) => {
   Share112.logOutandIn(email,password)
   Share112.removeUser(channel, removedUser)
})