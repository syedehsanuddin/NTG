@getDeletionCheckLevelById

Feature: Get Deletion Check Level By Id
  Validate GET /api/v1/levels/{id}/deletion-check endpoint

  Scenario: GET Get Deletion Check Level By Id returns successful response
    When I send a GET request to endpoint "getDeletionCheckLevelById" with id "{STORED_DELETIONCHECK_ID}"
    Then the response status should be 200
