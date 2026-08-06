@deleteGradeTemplate

Feature: Delete Grade Template
  Validate DELETE /api/v1/grade-templates/{id} endpoint

  Scenario: POST Create a new gradetemplate returns successful response
    When I send a POST request to endpoint "postCreateGradeTemplate" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as gradetemplate id

  Scenario: DELETE Delete Grade Template returns successful response
    When I send a DELETE request to endpoint "deleteGradeTemplate" with id "{STORED_GRADETEMPLATE_ID}"
    Then the response status should be 200
