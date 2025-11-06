@getTicketById

Feature: Get Ticket By ID API Validation
  Validate GET /api/v1/tickets/{id} endpoint

  Scenario: GET Ticket by ID returns ticket data, then 404 after deletion
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - No Action Required",
        "description": "<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>",
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
    And the user hits get endpoint with the recently created ticket
    Then the response status should be 200
    And the response data should have field "title" equal to "NTA - Automated Test Ticket - No Action Required"
    When the user deletes the recently created ticket
    Then the response status should be 200
    And the user hits get endpoint with the recently created ticket
    Then the response status should be 404

