@getStaffById

Feature: Get Staff By Id
  Validate GET /api/v1/staff/{id} endpoint

  Scenario: POST Create a new staff returns successful response
    When I send a POST request to endpoint "postCreateStaff" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as staff id

  Scenario: GET Get Staff By Id returns successful response
    When I send a GET request to endpoint "getStaffById" with id "{STORED_STAFF_ID}"
    Then the response status should be 200
