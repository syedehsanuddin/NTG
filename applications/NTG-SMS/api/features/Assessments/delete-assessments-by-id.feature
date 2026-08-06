@deleteAssessment

Feature: Delete Assessment
  Validate DELETE /api/v1/assessments/{id} endpoint

  Scenario: POST Create a new assessment returns successful response
    When I send a POST request to endpoint "postCreateAssessment" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as assessment id

  Scenario: DELETE Delete Assessment returns successful response
    When I send a DELETE request to endpoint "deleteAssessment" with id "{STORED_ASSESSMENT_ID}"
    Then the response status should be 200
