@getFileStorage

Feature: Get File Storage
  Validate GET /api/v1/storage/files endpoint

  Scenario: GET Get File Storage returns successful response
    When I send a GET request to endpoint "getFileStorage"
    Then the response status should be 200
