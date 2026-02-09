@postCreateMenu

Feature: Create a new menu type
  Validate POST /api/v1/menu/menus endpoint

  Scenario: POST Create a new menu type returns successful response
    When I send a POST request to endpoint "postCreateMenu" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
