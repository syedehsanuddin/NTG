@getCacheStats

Feature: Get translation cache statistics
  Validate GET /api/v1/translations/cache/stats endpoint

  Scenario: GET Get translation cache statistics returns successful response
    When I send a GET request to endpoint "getCacheStats"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
