Feature: User Registration

  Scenario: User registers successfully on the e-shop
    Given I am on the shop home page
    When I go to the registration page
    And I register with valid details
    Then I should see a confirmation on the admin page
