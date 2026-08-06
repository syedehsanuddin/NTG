@getMeStudent

Feature: Get Me Student
  Validate GET /api/v1/student/me endpoint

  Scenario: GET Get Me Student returns successful response
    When I send a GET request to endpoint "getMeStudent"
    Then the response status should be 200
