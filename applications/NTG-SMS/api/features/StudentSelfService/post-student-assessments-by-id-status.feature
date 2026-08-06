@postAssessmentStatuStudent

Feature: Post Assessment Statu Student
  Validate POST /api/v1/student/assessments/{id}/status endpoint

  Scenario: POST Post Assessment Statu Student returns successful response
    When I send a POST request to endpoint "postAssessmentStatuStudent" with id "{STORED_STATU_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
