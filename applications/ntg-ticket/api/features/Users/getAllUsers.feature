@getAllUsers @happyflow @usersHappyFlow @regression

Feature: All Users API Validation
  Validate GET All Users endpoint with filters and pagination via headers

  Scenario: GET All Users with limit returns exact number of records
    When I send a GET request to endpoint "getAllUsers" with headers "limit=1"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should have exactly 1 items
  
  
  Scenario: GET All Users with search filter returns matching users
    When I send a GET request to endpoint "getAllUsers" with headers "search=Masri"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
    And all items should contain "Masri" in field "name"

  
  Scenario: GET All Users with role filter returns only that role
    When I send a GET request to endpoint "getAllUsers" with headers "role=ADMIN"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
    And all items should have field "roles" equal to "ADMIN"

  
  Scenario: GET All Users with isActive true returns only active users
    When I send a GET request to endpoint "getAllUsers" with headers "isActive=true"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
    And all items should have field "isActive" equal to "true"

  
  Scenario: GET All Users with page and limit returns paged data
    When I send a GET request to endpoint "getAllUsers" with headers "page=1;limit=2"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item

