@getAdminByTenantBranche

Feature: Get Admin By Tenant Branche
  Validate GET /api/v1/branches/admin/by-tenant/{tenantId} endpoint

  Scenario: GET Get Admin By Tenant Branche returns successful response
    When I send a GET request to endpoint "getAdminByTenantBranche" with id "{STORED_BYTENANT_ID}"
    Then the response status should be 200
