@getEventById

Feature: Get Event By Id
  Validate GET /api/v1/events/{id} endpoint

  Scenario: POST Create a new event returns successful response
    When I send a POST request to endpoint "postCreateEvent" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as event id

  Scenario: GET Get Event By Id returns successful response
    When I send a GET request to endpoint "getEventById" with id "{STORED_EVENT_ID}"
    Then the response status should be 200
