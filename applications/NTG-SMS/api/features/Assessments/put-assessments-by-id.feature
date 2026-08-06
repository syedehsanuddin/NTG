@putUpdateAssessment

Feature: Put Update Assessment
  Validate PUT /api/v1/assessments/{id} endpoint

  Scenario: POST Create a new assessment returns successful response
    When I send a POST request to endpoint "postCreateAssessment" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as assessment id

  Scenario: PUT Put Update Assessment returns successful response
    When I send a PUT request to endpoint "putUpdateAssessment" with id "{STORED_ASSESSMENT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
