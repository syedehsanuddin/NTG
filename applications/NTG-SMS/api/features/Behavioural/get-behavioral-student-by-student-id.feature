@getStudentBehavioral

Feature: Get Student Behavioral
  Validate GET /api/v1/behavioral/student/{studentId} endpoint

  Scenario: GET Get Student Behavioral returns successful response
    When I send a GET request to endpoint "getStudentBehavioral" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
