@getEntityTranslations

Feature: Get all translations for an entity
  Validate GET /api/v1/translations/entity/{entityType}/{entityId} endpoint

  Scenario: GET Get all translations for an entity returns successful response
    When I send a GET request to endpoint "getEntityTranslations" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
