@getCategories

Feature: Get all categories with subcategories
  Validate GET /api/v1/menu/categories endpoint

  Scenario: GET Get all categories with subcategories returns successful response
    When I send a GET request to endpoint "getCategories"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
