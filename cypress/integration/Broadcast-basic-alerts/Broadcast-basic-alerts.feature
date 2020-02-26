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

  Background:
    Given broadcasting alerts with Lambda is enabled

  Scenario: Broadcast a lockdown alert (active alert?)
    Given a global administrator named "Adrian"
    Given the "Liberty HS" channel of type "school" was added with zip code "12345"
    And the following people were added to the "Liberty HS" channel:
      | firstname | lastname | email | mobile |
      | Laura | Blue | laura@share911.com | 500-555-5551 |
      | Mike | Green | mike@share911.com | 500-555-5552 |
      | Rachel | Brown | rachel@share911.com | 500-555-5553 |
    And the "Bedford PD" agency was added and responds to zip code "12345"
    And the following people were added to the "Bedford PD" agency:
      | firstname | lastname | email | mobile |
      | Officer | Yellow | yellow@share911.com | 500-444-5554 |
      | Officer | Black | black@share911.com | 500-444-5555 |
    And the phone number of the "Bedford PD" agency was added to the "Liberty HS" channel
    And "laura@share911.com" is authorized to send alerts to "Liberty HS" channel
    And "laura@share911.com"'s account is at least 10 minutes old
    And "laura@share911.com" is logged in
    When "laura@share911.com" broadcasts a "Lockdown" alert for the "Liberty HS" channel
    Then everyone in "Liberty HS" channel gets alerted
    And all police officers in "Bedford PD" agency will be alerted
    And the "Bedford PD" agency voice number will be called

  Scenario: Broadcast a evacuation alert to all tenants of a building
    Given a global administrator named "Adrian"
    Given the "Bedford Mall" channel of type "commercial_building" was added with zip code "12345"
    Given the "Apple store" tenant of the "Bedford Mall" building was added
    Given the "Orange store" tenant of the "Bedford Mall" building was added
    And the following people were added to the "Bedford Mall" channel:
      | firstname | lastname | email | mobile |
      | Laura | Blue | laura@share911.com | 500-555-5551 |
      | Tom | Red | tom@share911.com | 500-555-5550 |
    And the following people were added to the "Apple store" channel:
      | firstname | lastname | email | mobile |
      | Mike | Green | mike@share911.com | 500-555-5552 |
    And the following people were added to the "Orange store" channel:
      | firstname | lastname | email | mobile |
      | Rachel | Brown | rachel@share911.com | 500-555-5553 |
    And the "Bedford PD" agency was added and responds to zip code "12345"
    And the following people were added to the "Bedford PD" agency:
      | firstname | lastname | email | mobile |
      | Officer | Yellow | yellow@share911.com | 500-444-5554 |
      | Officer | Black | black@share911.com | 500-444-5555 |
    And the phone number of the "Bedford PD" agency was added to the "Bedford Mall" channel
    And "laura@share911.com" is authorized to send alerts to "Bedford Mall" channel
    And "laura@share911.com"'s account is at least 10 minutes old
    And "laura@share911.com" is logged in
    When "laura@share911.com" broadcasts a "Evacuate" alert to all tenants of the "Bedford Mall" building
    Then everyone in "Bedford Mall" channel gets alerted
    And everyone in "Apple store" channel gets alerted
    And everyone in "Orange store" channel gets alerted
    And all police officers in "Bedford PD" agency will be alerted
    And the "Bedford PD" agency voice number will be called

  Scenario: Broadcast a evacuation alert to ONE tenant of a building
    Given a global administrator named "Adrian"
    Given the "Bedford Mall" channel of type "commercial_building" was added with zip code "12345"
    Given the "Apple store" tenant of the "Bedford Mall" building was added
    Given the "Orange store" tenant of the "Bedford Mall" building was added
    And the following people were added to the "Bedford Mall" channel:
      | firstname | lastname | email | mobile |
      | Laura | Blue | laura@share911.com | 500-555-5551 |
      | Tom | Red | tom@share911.com | 500-555-5550 |
    And the following people were added to the "Apple store" channel:
      | firstname | lastname | email | mobile |
      | Mike | Green | mike@share911.com | 500-555-5552 |
    And the following people were added to the "Orange store" channel:
      | firstname | lastname | email | mobile |
      | Rachel | Brown | rachel@share911.com | 500-555-5553 |
    And the "Bedford PD" agency was added and responds to zip code "12345"
    And the following people were added to the "Bedford PD" agency:
      | firstname | lastname | email | mobile |
      | Officer | Yellow | yellow@share911.com | 500-444-5554 |
      | Officer | Black | black@share911.com | 500-444-5555 |
    And the phone number of the "Bedford PD" agency was added to the "Bedford Mall" channel
    And "laura@share911.com" is authorized to send alerts to "Bedford Mall" channel
    And "laura@share911.com"'s account is at least 10 minutes old
    And "laura@share911.com" is logged in
    When "laura@share911.com" broadcasts a "Evacuate" alert to the "Apple store" tenant of the "Bedford Mall" building
    Then everyone in "Bedford Mall" channel gets alerted
    And everyone in "Apple store" channel gets alerted
    And no-one in "Orange store" channel gets alerted
    And all police officers in "Bedford PD" agency will be alerted
    And the "Bedford PD" agency voice number will be called

  Scenario: Broadcast a evacuation alert to a channel that is also a tenant
    Given a global administrator named "Adrian"
    Given the "Bedford Mall" channel of type "commercial_building" was added with zip code "12345"
    Given the "Apple store" tenant of the "Bedford Mall" building was added
    Given the "Orange store" tenant of the "Bedford Mall" building was added
    And the following people were added to the "Bedford Mall" channel:
      | firstname | lastname | email | mobile |
      | Laura | Blue | laura@share911.com | 500-555-5551 |
      | Tom | Red | tom@share911.com | 500-555-5550 |
    And the following people were added to the "Apple store" channel:
      | firstname | lastname | email | mobile |
      | Mike | Green | mike@share911.com | 500-555-5552 |
    And the following people were added to the "Orange store" channel:
      | firstname | lastname | email | mobile |
      | Rachel | Brown | rachel@share911.com | 500-555-5553 |
    And the "Bedford PD" agency was added and responds to zip code "12345"
    And the following people were added to the "Bedford PD" agency:
      | firstname | lastname | email | mobile |
      | Officer | Yellow | yellow@share911.com | 500-444-5554 |
      | Officer | Black | black@share911.com | 500-444-5555 |
    And the phone number of the "Bedford PD" agency was added to the "Bedford Mall" channel
    And "mike@share911.com" is authorized to send alerts to "Apple store" channel
    And "mike@share911.com"'s account is at least 10 minutes old
    And "mike@share911.com" is logged in
    When "mike@share911.com" broadcasts a "Evacuate" alert for the "Apple store" channel
    Then everyone in "Bedford Mall" channel gets alerted
    And everyone in "Apple store" channel gets alerted
    And no-one in "Orange store" channel gets alerted
    And all police officers in "Bedford PD" agency will be alerted
    And the "Bedford PD" agency voice number will be called

  Scenario: Lockout

  Scenario: Shelter in place

  Scenario: Evacuate

  Drill notifications
  Hierarchy
    Mall -> Tenants
    Bubble up
