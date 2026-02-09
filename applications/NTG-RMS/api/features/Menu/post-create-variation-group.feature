@postCreateVariationGroup

Feature: Create a new variation group
  Validate POST /api/v1/menu/variation-groups endpoint

  Scenario: POST Create a new variation group returns successful response
    When I send a POST request to endpoint "postCreateVariationGroup" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
