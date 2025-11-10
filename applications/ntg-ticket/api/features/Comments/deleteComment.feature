@deleteComment @happyflow @regression
Feature: Delete Comment API Validation
  Validate DELETE /api/v1/comments/{id} endpoint

  Scenario: DELETE Comment after creation
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - Comment Deletion Flow",
        "description": "<p>This ticket is created to test automated comment deletion and will be removed afterwards.</p>",
        "category": "63b9e3d4-85a5-4029-a458-2209cf4476a1",
        "subcategory": "dfa5af36-b4a1-4657-8076-5df793828222",
        "priority": "LOW",
        "impact": "MINOR",
        "urgency": "LOW",
        "slaLevel": "STANDARD",
        "customFields": {}
      }
      """
    Then the response status should be 201
    And the response data should have field "id"
    When the user adds a comment to the recently created ticket:
      """
      {
        "ticketId": "",
        "content": "This is automated test comment",
        "isInternal": false
      }
      """
    Then the response status should be 201
    And the response data should have field "id"
    When the user deletes the recently added comment
    Then the response status should be 200
    When the user deletes the recently created ticket
    Then the response status should be 200

