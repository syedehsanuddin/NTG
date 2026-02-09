@getRoles

Feature: Get all roles
  Validate GET /api/v1/roles endpoint

  Scenario: GET Get all roles returns successful response
    When I send a GET request to endpoint "getRoles"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
