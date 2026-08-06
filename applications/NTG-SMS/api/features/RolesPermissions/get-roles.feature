@getRoles

Feature: Get Roles
  Validate GET /api/v1/roles endpoint

  Scenario: GET Get Roles returns successful response
    When I send a GET request to endpoint "getRoles"
    Then the response status should be 200
