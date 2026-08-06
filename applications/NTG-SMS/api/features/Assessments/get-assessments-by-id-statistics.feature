@getStatisticAssessmentById

Feature: Get Statistic Assessment By Id
  Validate GET /api/v1/assessments/{id}/statistics endpoint

  Scenario: GET Get Statistic Assessment By Id returns successful response
    When I send a GET request to endpoint "getStatisticAssessmentById" with id "{STORED_STATISTIC_ID}"
    Then the response status should be 200
