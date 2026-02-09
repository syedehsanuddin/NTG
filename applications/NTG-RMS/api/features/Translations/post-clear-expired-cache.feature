@postClearExpiredCache

Feature: Clear expired translation cache entries
  Validate POST /api/v1/translations/cache/clear endpoint

  Scenario: POST Clear expired translation cache entries returns successful response
    When I send a POST request to endpoint "postClearExpiredCache" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
