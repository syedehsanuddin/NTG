@getMeTenant

Feature: Get Me Tenant
  Validate GET /api/v1/tenants/me endpoint

  Scenario: GET Get Me Tenant returns successful response
    When I send a GET request to endpoint "getMeTenant"
    Then the response status should be 200
