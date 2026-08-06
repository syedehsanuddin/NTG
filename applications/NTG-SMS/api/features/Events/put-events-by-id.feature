@putUpdateEvent

Feature: Put Update Event
  Validate PUT /api/v1/events/{id} endpoint

  Scenario: POST Create a new event returns successful response
    When I send a POST request to endpoint "postCreateEvent" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as event id

  Scenario: PUT Put Update Event returns successful response
    When I send a PUT request to endpoint "putUpdateEvent" with id "{STORED_EVENT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
