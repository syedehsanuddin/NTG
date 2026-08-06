@deleteSubscribePush

Feature: Delete Subscribe Push
  Validate DELETE /api/v1/push/subscribe endpoint

  Scenario: DELETE Delete Subscribe Push returns successful response
    When I send a DELETE request to endpoint "deleteSubscribePush"
    Then the response status should be 200
