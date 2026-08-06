@getMessageConversationById

Feature: Get Message Conversation By Id
  Validate GET /api/v1/conversations/{id}/messages endpoint

  Scenario: GET Get Message Conversation By Id returns successful response
    When I send a GET request to endpoint "getMessageConversationById" with id "{STORED_MESSAGE_ID}"
    Then the response status should be 200
