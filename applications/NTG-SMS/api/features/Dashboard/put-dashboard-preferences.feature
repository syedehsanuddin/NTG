@putPreferenceDashboard

Feature: Put Preference Dashboard
  Validate PUT /api/v1/dashboard/preferences endpoint

  Scenario: PUT Put Preference Dashboard returns successful response
    When I send a PUT request to endpoint "putPreferenceDashboard" with payload '{"name":"Automated Test"}'
    Then the response status should be 200
