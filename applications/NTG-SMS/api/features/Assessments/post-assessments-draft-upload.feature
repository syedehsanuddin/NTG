@postDraftUploadAssessment

Feature: Post Draft Upload Assessment
  Validate POST /api/v1/assessments/draft/upload endpoint

  Scenario: POST Post Draft Upload Assessment returns successful response
    When I send a POST request to endpoint "postDraftUploadAssessment" with payload '"string"'
    Then the response status should be 201
