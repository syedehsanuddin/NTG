@deleteMenu

Feature: Delete a menu type
  Validate DELETE /api/v1/menu/menus/{menuType} endpoint

  Scenario: DELETE Delete a menu type returns successful response
    When I send a DELETE request to endpoint "deleteMenu" with id "test-id"
    Then the response status should be 200
