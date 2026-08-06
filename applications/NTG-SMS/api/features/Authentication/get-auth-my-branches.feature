@getMyBrancheAuth

Feature: Get My Branche Auth
  Validate GET /api/v1/auth/my-branches endpoint

  Scenario: GET Get My Branche Auth returns successful response
    When I send a GET request to endpoint "getMyBrancheAuth"
    Then the response status should be 200
