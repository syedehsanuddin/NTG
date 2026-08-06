@postMyStatuAssessment

Feature: Post My Statu Assessment
  Validate POST /api/v1/assessments/{id}/my-status endpoint

  Scenario: POST Post My Statu Assessment returns successful response
    When I send a POST request to endpoint "postMyStatuAssessment" with id "{STORED_MYSTATU_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
