@getBuffets

Feature: Get all buffets
  Validate GET /api/v1/menu/buffets endpoint

  Scenario: GET Get all buffets returns successful response
    When I send a GET request to endpoint "getBuffets"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
