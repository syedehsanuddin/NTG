@postCreateAssessment

Feature: Post Create Assessment
  Validate POST /api/v1/assessments endpoint

  Scenario: POST Post Create Assessment returns successful response
    When I send a POST request to endpoint "postCreateAssessment" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
