@deleteSubjectTemplate

Feature: Delete Subject Template
  Validate DELETE /api/v1/subject-templates/{id} endpoint

  Scenario: POST Create a new subjecttemplate returns successful response
    When I send a POST request to endpoint "postCreateSubjectTemplate" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as subjecttemplate id

  Scenario: DELETE Delete Subject Template returns successful response
    When I send a DELETE request to endpoint "deleteSubjectTemplate" with id "{STORED_SUBJECTTEMPLATE_ID}"
    Then the response status should be 200
