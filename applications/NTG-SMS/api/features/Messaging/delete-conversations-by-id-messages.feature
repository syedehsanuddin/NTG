@deleteMessageConversation

Feature: Delete Message Conversation
  Validate DELETE /api/v1/conversations/{id}/messages endpoint

  Scenario: DELETE Delete Message Conversation returns successful response
    When I send a DELETE request to endpoint "deleteMessageConversation" with id "{STORED_MESSAGE_ID}"
    Then the response status should be 200
