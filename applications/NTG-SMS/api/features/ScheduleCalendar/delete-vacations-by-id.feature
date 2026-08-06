@deleteVacation

Feature: Delete Vacation
  Validate DELETE /api/v1/vacations/{id} endpoint

  Scenario: POST Create a new vacation returns successful response
    When I send a POST request to endpoint "postCreateVacation" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as vacation id

  Scenario: DELETE Delete Vacation returns successful response
    When I send a DELETE request to endpoint "deleteVacation" with id "{STORED_VACATION_ID}"
    Then the response status should be 200
