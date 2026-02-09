@putUpdateAddOnGroup

Feature: Update add-on group
  Validate PUT /api/v1/menu/add-on-groups/{id} endpoint

  Scenario: PUT Update add-on group returns successful response
    When I send a PUT request to endpoint "putUpdateAddOnGroup" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
