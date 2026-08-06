@postLogoTenant

Feature: Post Logo Tenant
  Validate POST /api/v1/tenants/logo endpoint

  Scenario: POST Post Logo Tenant returns successful response
    When I send a POST request to endpoint "postLogoTenant" with payload '"string"'
    Then the response status should be 201
