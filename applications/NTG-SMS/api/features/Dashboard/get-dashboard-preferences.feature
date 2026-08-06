@getPreferenceDashboard

Feature: Get Preference Dashboard
  Validate GET /api/v1/dashboard/preferences endpoint

  Scenario: GET Get Preference Dashboard returns successful response
    When I send a GET request to endpoint "getPreferenceDashboard"
    Then the response status should be 200
