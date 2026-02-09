@getTenantLanguages

Feature: Get enabled languages for current tenant
  Validate GET /api/v1/translations/tenant/languages endpoint

  Scenario: GET Get enabled languages for current tenant returns successful response
    When I send a GET request to endpoint "getTenantLanguages"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
