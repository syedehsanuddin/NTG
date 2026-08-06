@getDeletionCheckSectionById

Feature: Get Deletion Check Section By Id
  Validate GET /api/v1/sections/{id}/deletion-check endpoint

  Scenario: GET Get Deletion Check Section By Id returns successful response
    When I send a GET request to endpoint "getDeletionCheckSectionById" with id "{STORED_DELETIONCHECK_ID}"
    Then the response status should be 200
