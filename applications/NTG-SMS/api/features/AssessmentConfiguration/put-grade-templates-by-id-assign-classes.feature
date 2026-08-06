@putAssignClasseGradeTemplate

Feature: Put Assign Classe Grade Template
  Validate PUT /api/v1/grade-templates/{id}/assign-classes endpoint

  Scenario: PUT Put Assign Classe Grade Template returns successful response
    When I send a PUT request to endpoint "putAssignClasseGradeTemplate" with id "{STORED_ASSIGNCLASSE_ID}" and payload '"string"'
    Then the response status should be 200
