@putUpdateVacation

Feature: Put Update Vacation
  Validate PUT /api/v1/vacations/{id} endpoint

  Scenario: POST Create a new vacation returns successful response
    When I send a POST request to endpoint "postCreateVacation" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as vacation id

  Scenario: PUT Put Update Vacation returns successful response
    When I send a PUT request to endpoint "putUpdateVacation" with id "{STORED_VACATION_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
