@deleteStudentSubjectTemplate

Feature: Delete Student Subject Template
  Validate DELETE /api/v1/subject-templates/students/{studentId} endpoint

  Scenario: DELETE Delete Student Subject Template returns successful response
    When I send a DELETE request to endpoint "deleteStudentSubjectTemplate" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
