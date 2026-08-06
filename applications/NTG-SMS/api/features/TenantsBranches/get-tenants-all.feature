@getAllTenant

Feature: Get All Tenant
  Validate GET /api/v1/tenants/all endpoint

  Scenario: GET Get All Tenant returns successful response
    When I send a GET request to endpoint "getAllTenant"
    Then the response status should be 200
