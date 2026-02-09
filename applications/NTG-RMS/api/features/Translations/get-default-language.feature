@getDefaultLanguage

Feature: Get default language
  Validate GET /api/v1/translations/languages/default endpoint

  Scenario: GET Get default language returns successful response
    When I send a GET request to endpoint "getDefaultLanguage"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
