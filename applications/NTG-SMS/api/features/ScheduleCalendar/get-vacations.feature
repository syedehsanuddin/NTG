@getVacations

Feature: Get Vacations
  Validate GET /api/v1/vacations endpoint

  Scenario: GET Get Vacations returns successful response
    When I send a GET request to endpoint "getVacations"
    Then the response status should be 200
