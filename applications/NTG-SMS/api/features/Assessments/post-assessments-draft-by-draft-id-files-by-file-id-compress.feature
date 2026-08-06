@postDraftFileCompresAssessment

Feature: Post Draft File Compres Assessment
  Validate POST /api/v1/assessments/draft/{draftId}/files/{fileId}/compress endpoint

  Scenario: POST Post Draft File Compres Assessment returns successful response
    When I send a POST request to endpoint "postDraftFileCompresAssessment" with id "{STORED_COMPRES_ID}" and payload '"string"'
    Then the response status should be 201
