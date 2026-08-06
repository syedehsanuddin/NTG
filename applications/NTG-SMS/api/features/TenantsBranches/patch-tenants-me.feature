@patchMeTenant

Feature: Patch Me Tenant
  Validate PATCH /api/v1/tenants/me endpoint

  Scenario: PATCH Patch Me Tenant returns successful response
    When I send a PATCH request to endpoint "patchMeTenant" with payload '{"name":"Automated Test"}'
    Then the response status should be 200
