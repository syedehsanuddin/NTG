@getNotificationById

Feature: Get Notification By Id
  Validate GET /api/v1/notifications/{id} endpoint

  Scenario: GET Get Notification By Id returns successful response
    When I send a GET request to endpoint "getNotificationById" with id "{STORED_NOTIFICATION_ID}"
    Then the response status should be 200
