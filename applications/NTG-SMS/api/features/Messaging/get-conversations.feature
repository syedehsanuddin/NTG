@getConversations

Feature: Get Conversations
  Validate GET /api/v1/conversations endpoint

  Scenario: GET Get Conversations returns successful response
    When I send a GET request to endpoint "getConversations"
    Then the response status should be 200
