@putUpdateVariationGroup

Feature: Update variation group
  Validate PUT /api/v1/menu/variation-groups/{id} endpoint

  Scenario: PUT Update variation group returns successful response
    When I send a PUT request to endpoint "putUpdateVariationGroup" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
