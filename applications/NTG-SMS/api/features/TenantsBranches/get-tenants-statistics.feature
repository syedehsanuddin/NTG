@getStatisticTenant

Feature: Get Statistic Tenant
  Validate GET /api/v1/tenants/statistics endpoint

  Scenario: GET Get Statistic Tenant returns successful response
    When I send a GET request to endpoint "getStatisticTenant"
    Then the response status should be 200
