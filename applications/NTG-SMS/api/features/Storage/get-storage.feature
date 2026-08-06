@getStorage

Feature: Get Storage
  Validate GET /api/v1/storage endpoint

  Scenario: GET Get Storage returns successful response
    When I send a GET request to endpoint "getStorage"
    Then the response status should be 200
