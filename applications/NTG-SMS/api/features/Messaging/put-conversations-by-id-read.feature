@putReadConversation

Feature: Put Read Conversation
  Validate PUT /api/v1/conversations/{id}/read endpoint

  Scenario: PUT Put Read Conversation returns successful response
    When I send a PUT request to endpoint "putReadConversation" with id "{STORED_READ_ID}" and payload '"string"'
    Then the response status should be 200
