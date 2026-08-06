@deleteEvent

Feature: Delete Event
  Validate DELETE /api/v1/events/{id} endpoint

  Scenario: POST Create a new event returns successful response
    When I send a POST request to endpoint "postCreateEvent" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as event id

  Scenario: DELETE Delete Event returns successful response
    When I send a DELETE request to endpoint "deleteEvent" with id "{STORED_EVENT_ID}"
    Then the response status should be 200
