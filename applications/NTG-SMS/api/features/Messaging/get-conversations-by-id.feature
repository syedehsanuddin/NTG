@getConversationById

Feature: Get Conversation By Id
  Validate GET /api/v1/conversations/{id} endpoint

  Scenario: POST Create a new conversation returns successful response
    When I send a POST request to endpoint "postCreateConversation" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as conversation id

  Scenario: GET Get Conversation By Id returns successful response
    When I send a GET request to endpoint "getConversationById" with id "{STORED_CONVERSATION_ID}"
    Then the response status should be 200
