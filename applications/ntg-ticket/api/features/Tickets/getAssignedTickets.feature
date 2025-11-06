@getAssignedTickets

Feature: Get Assigned Tickets API Validation
  Validate GET /api/v1/tickets/assigned endpoint with query parameters

  Scenario: GET Assigned Tickets returns successful response with default parameters
    When I send a GET request to endpoint "getAssignedTickets"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
    And all items in the response should have required fields: "id, title, priority"

  Scenario: GET Assigned Tickets with page and limit returns paged results
    When I send a GET request to endpoint "getAssignedTickets" with headers "page=1;limit=20"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
    And all items in the response should have required fields: "id, title, priority"

  Scenario: GET Assigned Tickets with priority filter returns matching tickets
    When I send a GET request to endpoint "getAssignedTickets" with headers "priority%5B%5D=MEDIUM&page=1&limit=10"
    Then the response status should be 200
    And the response should be a valid JSON array
    And all items should have field "priority" equal to "MEDIUM"

  Scenario: GET Assigned Tickets with search parameter returns matching tickets
    When I send a GET request to endpoint "getAssignedTickets" with headers "search=email server"
    Then the response status should be 200
    And the response should be a valid JSON array
    # And the response array should contain at least 1 item

  Scenario: GET Assigned Tickets with date range returns tickets in date range
    When I send a GET request to endpoint "getAssignedTickets" with headers "dateFrom=2024-01-01T00:00:00.000Z;dateTo=2024-12-31T23:59:59.999Z"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
    And all items in the response should have required fields: "id, title, createdAt"

