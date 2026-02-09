@putActivateMenu

Feature: Activate or deactivate a menu
  Validate PUT /api/v1/menu/menus/{menuType}/activate endpoint

  Scenario: PUT Activate or deactivate a menu returns successful response
    When I send a PUT request to endpoint "putActivateMenu" with payload "{}"
    Then the response status should be 200
    And the response should have field "data"
