@getPermissions

Feature: Get Permissions
  Validate GET /api/v1/permissions endpoint

  Scenario: GET Get Permissions returns successful response
    When I send a GET request to endpoint "getPermissions"
    Then the response status should be 200
