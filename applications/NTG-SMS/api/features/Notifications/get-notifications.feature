@getNotifications

Feature: Get Notifications
  Validate GET /api/v1/notifications endpoint

  Scenario: GET Get Notifications returns successful response
    When I send a GET request to endpoint "getNotifications"
    Then the response status should be 200
