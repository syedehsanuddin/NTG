@getDeletionCheckClasseById

Feature: Get Deletion Check Classe By Id
  Validate GET /api/v1/classes/{id}/deletion-check endpoint

  Scenario: GET Get Deletion Check Classe By Id returns successful response
    When I send a GET request to endpoint "getDeletionCheckClasseById" with id "{STORED_DELETIONCHECK_ID}"
    Then the response status should be 200
