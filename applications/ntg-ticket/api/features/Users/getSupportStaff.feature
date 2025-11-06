@getSupportStaff
Feature: Support Staff API Validation
  Validate GET Support Staff endpoint 
@ntg-ticket
  Scenario: GET Support Staff returns successful response with required fields
    When I send a GET request to endpoint "getSupportStaff"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
    And all items in the response should have required fields: "id, email, name"
    And all items should have field "id" of type "string"
    And all items should have field "email" of type "string"
    And all items should have field "name" of type "string"

  Scenario: GET Support Staff response has valid data structure
    When I send a GET request to endpoint "getSupportStaff"
    Then the response status should be 200
    And the response content type should be "application/json"
    And the response should be an array
    And each item in the array should have field "id"
    And each item in the array should have field "email"
    And each item in the array should have field "name"

  Scenario: GET Support Staff response fields have non-empty values
    When I send a GET request to endpoint "getSupportStaff"
    Then the response status should be 200
    And all items should have non-empty field "id"
    And all items should have non-empty field "email"
    And all items should have non-empty field "name"

  Scenario: GET Support Staff response has valid email format
    When I send a GET request to endpoint "getSupportStaff"
    Then the response status should be 200
    And all items should have valid email format in field "email"
