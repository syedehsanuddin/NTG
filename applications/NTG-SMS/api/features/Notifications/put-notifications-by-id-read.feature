@putReadNotification

Feature: Put Read Notification
  Validate PUT /api/v1/notifications/{id}/read endpoint

  Scenario: PUT Put Read Notification returns successful response
    When I send a PUT request to endpoint "putReadNotification" with id "{STORED_READ_ID}" and payload '"string"'
    Then the response status should be 200
