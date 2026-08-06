@putUpdateTeacherAssignment

Feature: Put Update Teacher Assignment
  Validate PUT /api/v1/teacher-assignments/{id} endpoint

  Scenario: POST Create a new teacherassignment returns successful response
    When I send a POST request to endpoint "postCreateTeacherAssignment" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as teacherassignment id

  Scenario: PUT Put Update Teacher Assignment returns successful response
    When I send a PUT request to endpoint "putUpdateTeacherAssignment" with id "{STORED_TEACHERASSIGNMENT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
