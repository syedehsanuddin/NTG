@patchUpdateStatus @happyflow @regression
Feature: Update Ticket Status API Validation
  Validate PATCH /api/v1/tickets/{id}/status endpoint

  Scenario: PATCH Ticket status to OPEN after creation
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - Status Update",
        "description": "<p>This ticket is created for automated status update testing and will be removed afterwards.</p>",
        "category": "ba47e8b4-f669-4535-b3ef-3478f1d844e2",
        "subcategory": "7f45e38b-459f-43e7-bc8d-05b5e4652981",
        "priority": "LOW",
        "impact": "MINOR",
        "urgency": "LOW",
        "slaLevel": "STANDARD",
        "customFields": {}
      }
      """
    Then the response status should be 201
    And the response data should have field "id"
    When the user updates the recently created ticket status:
      """
      {
        "status": "OPEN"
      }
      """
    Then the response status should be 200
    And the response data should have field "status" equal to "OPEN"
    When the user deletes the recently created ticket
    Then the response status should be 200

