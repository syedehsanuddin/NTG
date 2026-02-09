@postCreateBuffet

Feature: Create a new buffet
  Validate POST /api/v1/menu/buffets endpoint

  Scenario: POST Create a new buffet returns successful response
    When I send a POST request to endpoint "postCreateBuffet" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
