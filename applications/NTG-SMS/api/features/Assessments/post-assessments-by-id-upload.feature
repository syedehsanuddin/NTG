@postUploadAssessment

Feature: Post Upload Assessment
  Validate POST /api/v1/assessments/{id}/upload endpoint

  Scenario: POST Post Upload Assessment returns successful response
    When I send a POST request to endpoint "postUploadAssessment" with id "{STORED_UPLOAD_ID}" and payload '"string"'
    Then the response status should be 201
