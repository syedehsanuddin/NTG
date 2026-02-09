@getMenus

Feature: Get all menus (grouped by menu type)
  Validate GET /api/v1/menu/menus endpoint

  Scenario: GET Get all menus (grouped by menu type) returns successful response
    When I send a GET request to endpoint "getMenus"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
