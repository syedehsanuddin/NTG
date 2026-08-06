@getBranches

Feature: Get Branches
  Validate GET /api/v1/branches endpoint

  Scenario: GET Get Branches returns successful response
    When I send a GET request to endpoint "getBranches"
    Then the response status should be 200
