@putUpdateGradeTemplate

Feature: Put Update Grade Template
  Validate PUT /api/v1/grade-templates/{id} endpoint

  Scenario: POST Create a new gradetemplate returns successful response
    When I send a POST request to endpoint "postCreateGradeTemplate" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as gradetemplate id

  Scenario: PUT Put Update Grade Template returns successful response
    When I send a PUT request to endpoint "putUpdateGradeTemplate" with id "{STORED_GRADETEMPLATE_ID}" and payload '"string"'
    Then the response status should be 200
