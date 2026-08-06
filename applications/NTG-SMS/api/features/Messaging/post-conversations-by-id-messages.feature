@postMessageConversation

Feature: Post Message Conversation
  Validate POST /api/v1/conversations/{id}/messages endpoint

  Scenario: POST Post Message Conversation returns successful response
    When I send a POST request to endpoint "postMessageConversation" with id "{STORED_MESSAGE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
