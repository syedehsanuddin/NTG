@getAllLanguagesAdmin

Feature: Get all languages including inactive (Admin only)
  Validate GET /api/v1/translations/admin/languages endpoint

  Scenario: GET Get all languages including inactive (Admin only) returns successful response
    When I send a GET request to endpoint "getAllLanguagesAdmin"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
