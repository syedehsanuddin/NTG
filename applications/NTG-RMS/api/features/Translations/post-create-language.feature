@postCreateLanguage

Feature: Create a new supported language (Admin only)
  Validate POST /api/v1/translations/admin/languages endpoint

  Scenario: POST Create a new supported language (Admin only) returns successful response
    When I send a POST request to endpoint "postCreateLanguage" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
