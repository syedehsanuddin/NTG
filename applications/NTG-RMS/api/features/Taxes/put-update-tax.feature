@putUpdateTax

Feature: Update a tax
  Validate PUT /api/v1/taxes/{id} endpoint

  Scenario: PUT Update a tax returns successful response
    When I send a PUT request to endpoint "putUpdateTax" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
