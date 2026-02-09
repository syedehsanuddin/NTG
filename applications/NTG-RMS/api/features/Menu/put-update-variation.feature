@putUpdateVariation

Feature: Update variation
  Validate PUT /api/v1/menu/variation-groups/{variationGroupId}/variations/{id} endpoint

  Scenario: PUT Update variation returns successful response
    When I send a PUT request to endpoint "putUpdateVariation" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
