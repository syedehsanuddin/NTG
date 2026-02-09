@deleteTax

Feature: Delete a tax
  Validate DELETE /api/v1/taxes/{id} endpoint

  Scenario: DELETE Delete a tax returns successful response
    When I send a DELETE request to endpoint "deleteTax" with id "test-id"
    Then the response status should be 200
