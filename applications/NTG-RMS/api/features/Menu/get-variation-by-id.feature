@getVariationById

Feature: Get variation by ID
  Validate GET /api/v1/menu/variation-groups/{variationGroupId}/variations/{id} endpoint

  Scenario: GET Get variation by ID returns successful response
    When I send a GET request to endpoint "getVariationById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
