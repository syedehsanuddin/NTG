@getStudentStatuAssessmentById

Feature: Get Student Statu Assessment By Id
  Validate GET /api/v1/assessments/{id}/student-status endpoint

  Scenario: GET Get Student Statu Assessment By Id returns successful response
    When I send a GET request to endpoint "getStudentStatuAssessmentById" with id "{STORED_STUDENTSTATU_ID}"
    Then the response status should be 200
