@deleteConversation

Feature: Delete Conversation
  Validate DELETE /api/v1/conversations/{id} endpoint

  Scenario: POST Create a new conversation returns successful response
    When I send a POST request to endpoint "postCreateConversation" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as conversation id

  Scenario: DELETE Delete Conversation returns successful response
    When I send a DELETE request to endpoint "deleteConversation" with id "{STORED_CONVERSATION_ID}"
    Then the response status should be 200
