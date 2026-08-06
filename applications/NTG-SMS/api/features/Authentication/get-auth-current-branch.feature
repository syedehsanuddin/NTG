@getCurrentBranchAuth

Feature: Get Current Branch Auth
  Validate GET /api/v1/auth/current-branch endpoint

  Scenario: GET Get Current Branch Auth returns successful response
    When I send a GET request to endpoint "getCurrentBranchAuth"
    Then the response status should be 200
