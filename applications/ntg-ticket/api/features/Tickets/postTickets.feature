@postTicket
Feature: Create Ticket API Validation
  Validate POST /api/v1/tickets endpoint
@zeeshan123
  Scenario: POST Ticket with valid payload returns successful response
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
    And the response should have field "data"
    And the response should have field "message"
    And the response data should have field "ticketNumber"
    And the response data should have field "status"
    When the user deletes the recently created ticket
    Then the response status should be 200

  

  Scenario: POST Ticket response contains correct data values
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
    And the response content type should be "application/json"
    # And the response data should have field "title" equal to "NTA - Automated Test Ticket - No Action Required"
    # And the response data should have field "priority" equal to "LOW"
    # And the response data should have field "impact" equal to "MINOR"
    # And the response data should have field "urgency" equal to "LOW"
    # And the response data should have field "slaLevel" equal to "STANDARD"
    # And the response data should have field "category" equal to "63b9e3d4-85a5-4029-a458-2209cf4476a1"
    # And the response data should have field "subcategory" equal to "bc999191-e258-4b39-b41d-9019460f79c3"
    When the user deletes the recently created ticket
    Then the response status should be 200

  Scenario: POST Ticket with different category, subcategory, priority, impact, and urgency values
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - No Action Required",
        "description": "<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>",
        "category": "ba47e8b4-f669-4535-b3ef-3478f1d844e2",
        "subcategory": "7f45e38b-459f-43e7-bc8d-05b5e4652981",
        "priority": "MEDIUM",
        "impact": "MAJOR",
        "customFields": {}
      }
      """
    Then the response status should be 201
    And the response content type should be "application/json"
    And the response data should have field "title" equal to "NTA - Automated Test Ticket - No Action Required"
    And the response data should have field "priority" equal to "MEDIUM"
    And the response data should have field "impact" equal to "MAJOR"
    And the response data should have field "urgency" equal to "HIGH"
    And the response data should have field "slaLevel" equal to "STANDARD"
    And the response data should have field "category" equal to "ba47e8b4-f669-4535-b3ef-3478f1d844e2"
    And the response data should have field "subcategory" equal to "7f45e38b-459f-43e7-bc8d-05b5e4652981"
    When the user deletes the recently created ticket
    Then the response status should be 200

  Scenario: POST Ticket response has valid data types
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - No Action Required",
        "description": "<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>",
        "category": "63b9e3d4-85a5-4029-a458-2209cf4476a1",
        "subcategory": "bc999191-e258-4b39-b41d-9019460f79c3",
        "priority": "LOW",
        "impact": "MINOR",
        "customFields": {}
      }
      """
    Then the response status should be 201
    And the response data should have field "id" of type "string"
    And the response data should have field "title" of type "string"
    And the response data should have field "description" of type "string"
    And the response data should have field "category" of type "object"
    And the response data should have field "subcategory" of type "object"
    And the response data should have field "priority" of type "string"
    And the response data should have field "impact" of type "string"
    And the response data should have field "urgency" of type "string"
    And the response data should have field "slaLevel" of type "string"
    And the response data should have field "customFields" of type "object"
    When the user deletes the recently created ticket
    Then the response status should be 200

  Scenario: POST Ticket response has required timestamp fields
    When user creates a ticket with followin payload:
      """
      {
        "title": "NTA - Automated Test Ticket - No Action Required",
        "description": "<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>",
        "category": "63b9e3d4-85a5-4029-a458-2209cf4476a1",
        "subcategory": "bc999191-e258-4b39-b41d-9019460f79c3",
        "priority": "LOW",
        "impact": "MINOR",
        "customFields": {}
      }
      """
    Then the response status should be 201
    # And the response data should have field "createdAt"
    # And the response data should have field "updatedAt"
    # And the response data field "createdAt" should be a valid ISO date string
    # And the response data field "updatedAt" should be a valid ISO date string
    When the user deletes the recently created ticket
    Then the response status should be 200
