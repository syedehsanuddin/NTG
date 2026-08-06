@getWidgetDashboard

Feature: Get Widget Dashboard
  Validate GET /api/v1/dashboard/widgets endpoint

  Scenario: GET Get Widget Dashboard returns successful response
    When I send a GET request to endpoint "getWidgetDashboard"
    Then the response status should be 200
