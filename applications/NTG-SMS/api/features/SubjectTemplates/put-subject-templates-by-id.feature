@putUpdateSubjectTemplate

Feature: Put Update Subject Template
  Validate PUT /api/v1/subject-templates/{id} endpoint

  Scenario: POST Create a new subjecttemplate returns successful response
    When I send a POST request to endpoint "postCreateSubjectTemplate" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as subjecttemplate id

  Scenario: PUT Put Update Subject Template returns successful response
    When I send a PUT request to endpoint "putUpdateSubjectTemplate" with id "{STORED_SUBJECTTEMPLATE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
