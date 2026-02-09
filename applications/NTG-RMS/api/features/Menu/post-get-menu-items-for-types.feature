@postGetMenuItemsForTypes

Feature: Get food item IDs for multiple menu types at once
  Validate POST /api/v1/menu/menus/items/batch endpoint

  Scenario: POST Get food item IDs for multiple menu types at once returns successful response
    When I send a POST request to endpoint "postGetMenuItemsForTypes" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
