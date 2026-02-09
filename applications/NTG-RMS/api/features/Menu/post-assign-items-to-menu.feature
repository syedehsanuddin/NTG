@postAssignItemsToMenu

Feature: Assign food items to a menu
  Validate POST /api/v1/menu/menus/{menuType}/assign-items endpoint

  Scenario: POST Assign food items to a menu returns successful response
    When I send a POST request to endpoint "postAssignItemsToMenu" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
