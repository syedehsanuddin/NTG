@getGrades

Feature: Get Grades
  Validate GET /api/v1/grades endpoint

  Scenario: GET Get Grades returns successful response
    When I send a GET request to endpoint "getGrades"
    Then the response status should be 200
