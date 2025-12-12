@getTicketById @regression

Feature: Get Ticket By ID API Validation
  Validate GET /api/v1/tickets/{id} endpoint

  Scenario: GET Ticket by ID returns ticket data, then 404 after deletion
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - No Action Required",
        "description": "<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>",
        "category": "ba47e8b4-f669-4535-b3ef-3478f1d844e2",
        "subcategory": "bc999191-e258-4b39-b41d-9019460f79c3",
        "priority": "LOW",
        "impact": "MINOR",
        "customFields": {}
      }
      """
    Then the response status should be 201
    And the user hits get endpoint with the recently created ticket
    Then the response status should be 200
    # And the response data should have field "message" equal to "Ticket created successfully"
    When the user deletes the recently created ticket
    Then the response status should be 200
    And the user hits get endpoint with the recently created ticket
    Then the response status should be 404

