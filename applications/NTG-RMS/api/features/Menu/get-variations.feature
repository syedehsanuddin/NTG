@getVariations

Feature: Get all variations in a group
  Validate GET /api/v1/menu/variation-groups/{variationGroupId}/variations endpoint

  Scenario: GET Get all variations in a group returns successful response
    When I send a GET request to endpoint "getVariations" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
