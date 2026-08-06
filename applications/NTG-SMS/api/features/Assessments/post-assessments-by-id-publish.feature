@postPublishAssessment

Feature: Post Publish Assessment
  Validate POST /api/v1/assessments/{id}/publish endpoint

  Scenario: POST Post Publish Assessment returns successful response
    When I send a POST request to endpoint "postPublishAssessment" with id "{STORED_PUBLISH_ID}" and payload '"string"'
    Then the response status should be 201
