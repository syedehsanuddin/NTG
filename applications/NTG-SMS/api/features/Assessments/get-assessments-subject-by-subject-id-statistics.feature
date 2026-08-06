@getSubjectStatisticAssessment

Feature: Get Subject Statistic Assessment
  Validate GET /api/v1/assessments/subject/{subjectId}/statistics endpoint

  Scenario: GET Get Subject Statistic Assessment returns successful response
    When I send a GET request to endpoint "getSubjectStatisticAssessment" with id "{STORED_STATISTIC_ID}"
    Then the response status should be 200
