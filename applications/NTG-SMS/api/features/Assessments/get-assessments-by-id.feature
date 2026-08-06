@getAssessmentById

Feature: Get Assessment By Id
  Validate GET /api/v1/assessments/{id} endpoint

  Scenario: POST Create a new assessment returns successful response
    When I send a POST request to endpoint "postCreateAssessment" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as assessment id

  Scenario: GET Get Assessment By Id returns successful response
    When I send a GET request to endpoint "getAssessmentById" with id "{STORED_ASSESSMENT_ID}"
    Then the response status should be 200
