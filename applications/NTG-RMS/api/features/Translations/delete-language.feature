@deleteLanguage

Feature: Delete a language (soft delete - Admin only)
  Validate DELETE /api/v1/translations/admin/languages/{code} endpoint

  Scenario: DELETE Delete a language (soft delete - Admin only) returns successful response
    When I send a DELETE request to endpoint "deleteLanguage" with id "test-id"
    Then the response status should be 200
