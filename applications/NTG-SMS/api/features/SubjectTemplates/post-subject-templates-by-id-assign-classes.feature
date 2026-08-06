@postAssignClasseSubjectTemplate

Feature: Post Assign Classe Subject Template
  Validate POST /api/v1/subject-templates/{id}/assign-classes endpoint

  Scenario: POST Post Assign Classe Subject Template returns successful response
    When I send a POST request to endpoint "postAssignClasseSubjectTemplate" with id "{STORED_ASSIGNCLASSE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
