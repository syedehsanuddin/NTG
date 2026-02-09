@postCreateTranslations

Feature: Create translations for an entity field
  Validate POST /api/v1/translations endpoint

  Scenario: POST Create translations for an entity field returns successful response
    When I send a POST request to endpoint "postCreateTranslations" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
