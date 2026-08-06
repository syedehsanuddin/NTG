@putUpdatePermission

Feature: Put Update Permission
  Validate PUT /api/v1/permissions endpoint

  Scenario: PUT Put Update Permission returns successful response
    When I send a PUT request to endpoint "putUpdatePermission" with payload '{"name":"Automated Test"}'
    Then the response status should be 200
