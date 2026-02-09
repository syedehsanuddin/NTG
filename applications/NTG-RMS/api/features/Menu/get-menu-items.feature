@getMenuItems

Feature: Get food items in a menu
  Validate GET /api/v1/menu/menus/{menuType}/items endpoint

  Scenario: GET Get food items in a menu returns successful response
    When I send a GET request to endpoint "getMenuItems" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
