@putReadAllNotification

Feature: Put Read All Notification
  Validate PUT /api/v1/notifications/read-all endpoint

  Scenario: PUT Put Read All Notification returns successful response
    When I send a PUT request to endpoint "putReadAllNotification" with payload '"string"'
    Then the response status should be 200
