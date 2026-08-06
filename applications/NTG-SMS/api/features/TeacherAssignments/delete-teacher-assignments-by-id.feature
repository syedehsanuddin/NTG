@deleteTeacherAssignment

Feature: Delete Teacher Assignment
  Validate DELETE /api/v1/teacher-assignments/{id} endpoint

  Scenario: POST Create a new teacherassignment returns successful response
    When I send a POST request to endpoint "postCreateTeacherAssignment" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as teacherassignment id

  Scenario: DELETE Delete Teacher Assignment returns successful response
    When I send a DELETE request to endpoint "deleteTeacherAssignment" with id "{STORED_TEACHERASSIGNMENT_ID}"
    Then the response status should be 200
