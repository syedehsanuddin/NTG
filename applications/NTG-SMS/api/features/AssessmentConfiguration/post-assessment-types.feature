@postCreateAssessmentType

Feature: Post Create Assessment Type
  Validate POST /api/v1/assessment-types endpoint

  Scenario: POST Post Create Assessment Type returns successful response
    When I send a POST request to endpoint "postCreateAssessmentType" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
