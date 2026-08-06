@putReadMessage

Feature: Put Read Message
  Validate PUT /api/v1/messages/{id}/read endpoint

  Scenario: PUT Put Read Message returns successful response
    When I send a PUT request to endpoint "putReadMessage" with id "{STORED_READ_ID}" and payload '"string"'
    Then the response status should be 200
