@getUnreadCountNotification

Feature: Get Unread Count Notification
  Validate GET /api/v1/notifications/unread-count endpoint

  Scenario: GET Get Unread Count Notification returns successful response
    When I send a GET request to endpoint "getUnreadCountNotification"
    Then the response status should be 200
