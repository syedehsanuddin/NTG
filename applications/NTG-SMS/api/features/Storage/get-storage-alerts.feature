@getAlertStorage

Feature: Get Alert Storage
  Validate GET /api/v1/storage/alerts endpoint

  Scenario: GET Get Alert Storage returns successful response
    When I send a GET request to endpoint "getAlertStorage"
    Then the response status should be 200
