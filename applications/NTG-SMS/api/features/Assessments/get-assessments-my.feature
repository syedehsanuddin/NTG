@getMyAssessment

Feature: Get My Assessment
  Validate GET /api/v1/assessments/my endpoint

  Scenario: GET Get My Assessment returns successful response
    When I send a GET request to endpoint "getMyAssessment"
    Then the response status should be 200
