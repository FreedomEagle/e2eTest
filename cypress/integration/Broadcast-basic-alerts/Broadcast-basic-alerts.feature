Feature: Broadcast basic alerts

  In order to alert the police of suspicious behavior
  As a teacher
  I want to broadcast an alert

  # As Teacher Laura, I can broadcast an active Lockdown alert to Liberty HS and Principal Penny,
  # Teacher Mary, Officer Dave Drill, and Officer Alan Active will all be notified.
  # The Bedford PD voice number will be called.

#  1. Laura sees suspicious person, maybe with a gun
#  2. Uses computer/smartphone to broadcast active alert that is sent to everyone
#
#  Laura sees suspect
#  uses her smartphone broadcast alerts
#  wants to know the alert went to the right people
#  it's an active alert, so should be sent to everyone
#  unless it's a drill report does, police do not need to be notified

#  Background:
#    Given broadcasting alerts with Lambda is enabled

  Scenario: Broadcast a lockdown alert (active alert?)
    Given a global administrator named "Adrian"
  

