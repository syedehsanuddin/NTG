@getByTenantBranche

Feature: Get By Tenant Branche
  Validate GET /api/v1/branches/by-tenant endpoint

  Scenario: GET Get By Tenant Branche returns successful response
    When I send a GET request to endpoint "getByTenantBranche"
    Then the response status should be 200
