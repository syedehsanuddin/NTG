@getMyChildrenAuth

Feature: Get My Children Auth
  Validate GET /api/v1/auth/my-children endpoint

  Scenario: GET Get My Children Auth returns successful response
    When I send a GET request to endpoint "getMyChildrenAuth"
    Then the response status should be 200
