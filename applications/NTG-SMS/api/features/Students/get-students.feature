@getStudents

Feature: Get Students
  Validate GET /api/v1/students endpoint

  Scenario: GET Get Students returns successful response
    When I send a GET request to endpoint "getStudents"
    Then the response status should be 200
