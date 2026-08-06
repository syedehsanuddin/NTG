@patchActivationTenant

Feature: Patch Activation Tenant
  Validate PATCH /api/v1/tenants/{tenantId}/activation endpoint

  Scenario: PATCH Patch Activation Tenant returns successful response
    When I send a PATCH request to endpoint "patchActivationTenant" with id "{STORED_ACTIVATION_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
