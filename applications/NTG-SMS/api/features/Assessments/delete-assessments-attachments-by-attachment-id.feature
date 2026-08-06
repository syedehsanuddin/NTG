@deleteAttachmentAssessment

Feature: Delete Attachment Assessment
  Validate DELETE /api/v1/assessments/attachments/{attachmentId} endpoint

  Scenario: DELETE Delete Attachment Assessment returns successful response
    When I send a DELETE request to endpoint "deleteAttachmentAssessment" with id "{STORED_ATTACHMENT_ID}"
    Then the response status should be 200
