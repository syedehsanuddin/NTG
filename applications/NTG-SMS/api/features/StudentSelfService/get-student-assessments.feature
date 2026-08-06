@getAssessmentStudent

Feature: Get Assessment Student
  Validate GET /api/v1/student/assessments endpoint

  Scenario: GET Get Assessment Student returns successful response
    When I send a GET request to endpoint "getAssessmentStudent"
    Then the response status should be 200
