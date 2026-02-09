@getFoodItemsWithVariationGroup

Feature: Get food items that use this variation group
  Validate GET /api/v1/menu/variation-groups/{id}/food-items endpoint

  Scenario: GET Get food items that use this variation group returns successful response
    When I send a GET request to endpoint "getFoodItemsWithVariationGroup" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
