@postCreateConversation

Feature: Post Create Conversation
  Validate POST /api/v1/conversations endpoint

  Scenario: POST Post Create Conversation returns successful response
    When I send a POST request to endpoint "postCreateConversation" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
