@postEnableLanguageForTenant

Feature: Enable a language for current tenant and translate existing data
  Validate POST /api/v1/translations/tenant/languages/{code} endpoint

  Scenario: POST Enable a language for current tenant and translate existing data returns successful response
    When I send a POST request to endpoint "postEnableLanguageForTenant" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
