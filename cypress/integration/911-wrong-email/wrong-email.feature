Feature: Alerting Wrong Email User
  
  @e2e-test
  
  Scenario: Forgot Password
    Given I am at homepage
    When I press forgot password
    And I input 'myEmail@email.com'
    And Press 'Search'
    Then I get an error message
