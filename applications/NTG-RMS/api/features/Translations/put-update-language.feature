@putUpdateLanguage

Feature: Update a supported language (Admin only)
  Validate PUT /api/v1/translations/admin/languages/{code} endpoint

  Scenario: PUT Update a supported language (Admin only) returns successful response
    When I send a PUT request to endpoint "putUpdateLanguage" with payload "{}"
    Then the response status should be 200
    And the response should have field "data"
