@getSupportedLanguages

Feature: Get all supported languages
  Validate GET /api/v1/translations/languages endpoint

  Scenario: GET Get all supported languages returns successful response
    When I send a GET request to endpoint "getSupportedLanguages"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
