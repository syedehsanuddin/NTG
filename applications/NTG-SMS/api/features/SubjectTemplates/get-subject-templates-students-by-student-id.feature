@getStudentSubjectTemplate

Feature: Get Student Subject Template
  Validate GET /api/v1/subject-templates/students/{studentId} endpoint

  Scenario: GET Get Student Subject Template returns successful response
    When I send a GET request to endpoint "getStudentSubjectTemplate" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
