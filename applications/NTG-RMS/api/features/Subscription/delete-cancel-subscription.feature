@deleteCancelSubscription

Feature: Cancel subscription
  Validate DELETE /api/v1/subscription endpoint

  Scenario: DELETE Cancel subscription returns successful response
    When I send a DELETE request to endpoint "deleteCancelSubscription" with id "test-id"
    Then the response status should be 200
