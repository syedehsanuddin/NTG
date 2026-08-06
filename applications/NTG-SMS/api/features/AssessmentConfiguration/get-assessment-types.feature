@getAssessmentTypes

Feature: Get Assessment Types
  Validate GET /api/v1/assessment-types endpoint

  Scenario: GET Get Assessment Types returns successful response
    When I send a GET request to endpoint "getAssessmentTypes"
    Then the response status should be 200
