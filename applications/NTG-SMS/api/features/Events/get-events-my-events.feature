@getMyEventEvent

Feature: Get My Event Event
  Validate GET /api/v1/events/my-events endpoint

  Scenario: GET Get My Event Event returns successful response
    When I send a GET request to endpoint "getMyEventEvent"
    Then the response status should be 200
