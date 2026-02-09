@putUpdateAddOn

Feature: Update add-on
  Validate PUT /api/v1/menu/add-on-groups/{addOnGroupId}/add-ons/{id} endpoint

  Scenario: PUT Update add-on returns successful response
    When I send a PUT request to endpoint "putUpdateAddOn" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
