@getStudentPerformanceAssessment

Feature: Get Student Performance Assessment
  Validate GET /api/v1/assessments/student/{studentId}/performance endpoint

  Scenario: GET Get Student Performance Assessment returns successful response
    When I send a GET request to endpoint "getStudentPerformanceAssessment" with id "{STORED_PERFORMANCE_ID}"
    Then the response status should be 200
