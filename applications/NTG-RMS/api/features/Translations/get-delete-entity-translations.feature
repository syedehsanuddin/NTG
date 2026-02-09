@getDeleteEntityTranslations

Feature: Delete all translations for an entity
  Validate GET /api/v1/translations/delete/{entityType}/{entityId} endpoint

  Scenario: GET Delete all translations for an entity returns successful response
    When I send a GET request to endpoint "getDeleteEntityTranslations" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
