@getSubjectTemplateById

Feature: Get Subject Template By Id
  Validate GET /api/v1/subject-templates/{id} endpoint

  Scenario: POST Create a new subjecttemplate returns successful response
    When I send a POST request to endpoint "postCreateSubjectTemplate" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as subjecttemplate id

  Scenario: GET Get Subject Template By Id returns successful response
    When I send a GET request to endpoint "getSubjectTemplateById" with id "{STORED_SUBJECTTEMPLATE_ID}"
    Then the response status should be 200
