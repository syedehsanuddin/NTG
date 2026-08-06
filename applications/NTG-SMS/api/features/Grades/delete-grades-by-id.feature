@deleteGrade

Feature: Delete Grade
  Validate DELETE /api/v1/grades/{id} endpoint

  Scenario: POST Create a new grade returns successful response
    When I send a POST request to endpoint "postCreateGrade" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as grade id

  Scenario: DELETE Delete Grade returns successful response
    When I send a DELETE request to endpoint "deleteGrade" with id "{STORED_GRADE_ID}"
    Then the response status should be 200
