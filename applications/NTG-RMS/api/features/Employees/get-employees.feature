@getEmployees @happyFlow

Feature: Get all employees
  Validate GET /api/v1/employees endpoint

  Scenario: GET Get all employees returns successful response
    When I send a GET request to endpoint "getEmployees"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
