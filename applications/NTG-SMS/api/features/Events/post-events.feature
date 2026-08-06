@postCreateEvent

Feature: Post Create Event
  Validate POST /api/v1/events endpoint

  Scenario: POST Post Create Event returns successful response
    When I send a POST request to endpoint "postCreateEvent" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
