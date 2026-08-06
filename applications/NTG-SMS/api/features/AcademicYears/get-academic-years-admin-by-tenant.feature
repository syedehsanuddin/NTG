@getAdminByTenantAcademicYear

Feature: Get Admin By Tenant Academic Year
  Validate GET /api/v1/academic-years/admin/by-tenant endpoint

  Scenario: GET Get Admin By Tenant Academic Year returns successful response
    When I send a GET request to endpoint "getAdminByTenantAcademicYear"
    Then the response status should be 200
