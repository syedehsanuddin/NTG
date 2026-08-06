@getAttachmentAssessmentById

Feature: Get Attachment Assessment By Id
  Validate GET /api/v1/assessments/{id}/attachments endpoint

  Scenario: GET Get Attachment Assessment By Id returns successful response
    When I send a GET request to endpoint "getAttachmentAssessmentById" with id "{STORED_ATTACHMENT_ID}"
    Then the response status should be 200
