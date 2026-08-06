@putAssignClasseTimingTemplate

Feature: Put Assign Classe Timing Template
  Validate PUT /api/v1/timing-templates/{id}/assign-classes endpoint

  Scenario: PUT Put Assign Classe Timing Template returns successful response
    When I send a PUT request to endpoint "putAssignClasseTimingTemplate" with id "{STORED_ASSIGNCLASSE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
