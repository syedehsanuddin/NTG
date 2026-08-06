@getAssessmentGrade

Feature: Get Assessment Grade
  Validate GET /api/v1/grades/assessment/{assessmentId} endpoint

  Scenario: GET Get Assessment Grade returns successful response
    When I send a GET request to endpoint "getAssessmentGrade" with id "{STORED_ASSESSMENT_ID}"
    Then the response status should be 200
