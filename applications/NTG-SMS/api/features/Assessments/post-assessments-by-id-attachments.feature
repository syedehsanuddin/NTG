@postAttachmentAssessment

Feature: Post Attachment Assessment
  Validate POST /api/v1/assessments/{id}/attachments endpoint

  Scenario: POST Post Attachment Assessment returns successful response
    When I send a POST request to endpoint "postAttachmentAssessment" with id "{STORED_ATTACHMENT_ID}" and payload '"string"'
    Then the response status should be 201
