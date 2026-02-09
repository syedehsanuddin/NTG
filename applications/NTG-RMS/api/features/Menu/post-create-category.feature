@postCreateCategory

Feature: Create a new category
  Validate POST /api/v1/menu/categories endpoint

  Scenario: POST Create a new category returns successful response
    When I send a POST request to endpoint "postCreateCategory" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
