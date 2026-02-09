@getTranslation

Feature: Get translation for a specific field in a language
  Validate GET /api/v1/translations/translate endpoint

  Scenario: GET Get translation for a specific field in a language returns successful response
    When I send a GET request to endpoint "getTranslation"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
