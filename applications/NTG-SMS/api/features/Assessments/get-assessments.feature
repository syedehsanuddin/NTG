@getAssessments

Feature: Get Assessments
  Validate GET /api/v1/assessments endpoint

  Scenario: GET Get Assessments returns successful response
    When I send a GET request to endpoint "getAssessments"
    Then the response status should be 200
