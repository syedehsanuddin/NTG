@getUsersAlma

Feature: Get Users
  Validate GET /api/v1/users endpoint

  Scenario: GET Get Users returns successful response
    When I send a GET request to endpoint "getUsers"
    Then the response status should be 200
