@getDeletionCheckSubjectById

Feature: Get Deletion Check Subject By Id
  Validate GET /api/v1/subjects/{id}/deletion-check endpoint

  Scenario: GET Get Deletion Check Subject By Id returns successful response
    When I send a GET request to endpoint "getDeletionCheckSubjectById" with id "{STORED_DELETIONCHECK_ID}"
    Then the response status should be 200
