@putUpdateStaff

Feature: Put Update Staff
  Validate PUT /api/v1/staff/{id} endpoint

  Scenario: POST Create a new staff returns successful response
    When I send a POST request to endpoint "postCreateStaff" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as staff id

  Scenario: PUT Put Update Staff returns successful response
    When I send a PUT request to endpoint "putUpdateStaff" with id "{STORED_STAFF_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
