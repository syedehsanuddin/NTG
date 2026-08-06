@getTeacherAssignmentById

Feature: Get Teacher Assignment By Id
  Validate GET /api/v1/teacher-assignments/{id} endpoint

  Scenario: POST Create a new teacherassignment returns successful response
    When I send a POST request to endpoint "postCreateTeacherAssignment" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as teacherassignment id

  Scenario: GET Get Teacher Assignment By Id returns successful response
    When I send a GET request to endpoint "getTeacherAssignmentById" with id "{STORED_TEACHERASSIGNMENT_ID}"
    Then the response status should be 200
