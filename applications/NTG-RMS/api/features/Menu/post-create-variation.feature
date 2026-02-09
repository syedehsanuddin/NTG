@postCreateVariation

Feature: Create a new variation
  Validate POST /api/v1/menu/variation-groups/{variationGroupId}/variations endpoint

  Scenario: POST Create a new variation returns successful response
    When I send a POST request to endpoint "postCreateVariation" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
