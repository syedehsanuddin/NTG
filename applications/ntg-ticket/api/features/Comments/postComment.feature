@postComment @happyflow @regression
Feature: Create Comment API Validation
  Validate POST /api/v1/comments endpoint

  Scenario: POST Comment for a newly created ticket returns successful response
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - Comment Flow",
        "description": "<p>This ticket is created to test automated comment creation and will be removed afterwards.</p>",
        "category": "ba47e8b4-f669-4535-b3ef-3478f1d844e2",
        "subcategory": "bc999191-e258-4b39-b41d-9019460f79c3",
        "priority": "LOW",
        "impact": "MINOR",
        "customFields": {}
      }
      """
    Then the response status should be 201
    And the response data should have field "id"
    When the user adds a comment to the recently created ticket:
      """
      {
        "ticketId": "",
        "content": "This is automated test comment" 
      }
      """
    Then the response status should be 201
    And the response data should have field "id"
    And the response data should have field "content" equal to "This is automated test comment"
    When the user deletes the recently created ticket
    Then the response status should be 200

