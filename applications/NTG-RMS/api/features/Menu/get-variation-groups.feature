@getVariationGroups

Feature: Get all variation groups
  Validate GET /api/v1/menu/variation-groups endpoint

  Scenario: GET Get all variation groups returns successful response
    When I send a GET request to endpoint "getVariationGroups"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
