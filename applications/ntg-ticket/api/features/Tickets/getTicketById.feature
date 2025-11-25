@getTicketById @regression

Feature: Get Ticket By ID API Validation
  Validate GET /api/v1/tickets/{id} endpoint

  Scenario: GET Ticket by ID returns ticket data, then 404 after deletion
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - No Action Required",
        "description": "<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>",
        "category": "fb1ef4eb-1c99-4fe3-9dce-398ca993e763",
        "subcategory": "bff9c5d7-ad4b-46be-81c4-7103ee2b5825",
        "priority": "LOW",
        "impact": "MINOR",
        "urgency": "LOW",
        "customFields": {}
      }
      """
    Then the response status should be 201
    And the user hits get endpoint with the recently created ticket
    Then the response status should be 200
    And the response data should have field "title" equal to "NTA - Automated Test Ticket - No Action Required"
    When the user deletes the recently created ticket
    Then the response status should be 200
    And the user hits get endpoint with the recently created ticket
    Then the response status should be 404

