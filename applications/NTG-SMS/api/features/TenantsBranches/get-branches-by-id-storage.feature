@getStorageBrancheById

Feature: Get Storage Branche By Id
  Validate GET /api/v1/branches/{id}/storage endpoint

  Scenario: GET Get Storage Branche By Id returns successful response
    When I send a GET request to endpoint "getStorageBrancheById" with id "{STORED_STORAGE_ID}"
    Then the response status should be 200
