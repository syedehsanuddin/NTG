@getStudentGrade

Feature: Get Student Grade
  Validate GET /api/v1/grades/student/{studentId} endpoint

  Scenario: GET Get Student Grade returns successful response
    When I send a GET request to endpoint "getStudentGrade" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
