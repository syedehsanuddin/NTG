@postStudentAssignSubjectTemplate

Feature: Post Student Assign Subject Template
  Validate POST /api/v1/subject-templates/students/{studentId}/assign endpoint

  Scenario: POST Post Student Assign Subject Template returns successful response
    When I send a POST request to endpoint "postStudentAssignSubjectTemplate" with id "{STORED_ASSIGN_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
