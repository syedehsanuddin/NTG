@patchUpdateAssignee @happyflow @regression
Feature: Update Ticket Assignee API Validation
  Validate PATCH /api/v1/tickets/{id}/assign endpoint

  Scenario: PATCH Ticket assignee after creation
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - Assignee Update",
        "description": "<p>This ticket is created for automated assignee update testing and will be removed afterwards.</p>",
        "category": "fb1ef4eb-1c99-4fe3-9dce-398ca993e763",
        "subcategory": "bff9c5d7-ad4b-46be-81c4-7103ee2b5825",
        "priority": "LOW",
        "impact": "MINOR",
        "urgency": "LOW",
        "customFields": {}
      }
      """
    Then the response status should be 201
    And the response data should have field "id"
    When the user updates the recently created ticket assignee:
      """
      {
        "assignedToId": "157fb920-20b3-45c5-9967-09082ddf8e0e"
      }
      """
    Then the response status should be 200
    # And the response data should have field "assignedToId" equal to "157fb920-20b3-45c5-9967-09082ddf8e0e"
    When the user deletes the recently created ticket
    Then the response status should be 200

