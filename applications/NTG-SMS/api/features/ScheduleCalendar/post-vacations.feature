@postCreateVacation

Feature: Post Create Vacation
  Validate POST /api/v1/vacations endpoint

  Scenario: POST Post Create Vacation returns successful response
    When I send a POST request to endpoint "postCreateVacation" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
