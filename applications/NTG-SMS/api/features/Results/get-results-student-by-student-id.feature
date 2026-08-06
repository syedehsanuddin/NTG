@getStudentResult

Feature: Get Student Result
  Validate GET /api/v1/results/student/{studentId} endpoint

  Scenario: GET Get Student Result returns successful response
    When I send a GET request to endpoint "getStudentResult" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
