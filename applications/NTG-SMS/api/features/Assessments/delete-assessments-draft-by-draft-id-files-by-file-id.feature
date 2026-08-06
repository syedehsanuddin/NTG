@deleteDraftFileAssessment

Feature: Delete Draft File Assessment
  Validate DELETE /api/v1/assessments/draft/{draftId}/files/{fileId} endpoint

  Scenario: DELETE Delete Draft File Assessment returns successful response
    When I send a DELETE request to endpoint "deleteDraftFileAssessment" with id "{STORED_FILE_ID}"
    Then the response status should be 200
