@postAssignToTenantBranche

Feature: Post Assign To Tenant Branche
  Validate POST /api/v1/branches/assign-to-tenant endpoint

  Scenario: POST Post Assign To Tenant Branche returns successful response
    When I send a POST request to endpoint "postAssignToTenantBranche" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
