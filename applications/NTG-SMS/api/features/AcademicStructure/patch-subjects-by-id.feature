@patchUpdateSubject

Feature: Patch Update Subject
  Validate PATCH /api/v1/subjects/{id} endpoint

  Scenario: POST Create a new subject returns successful response
    When I send a POST request to endpoint "postCreateSubject" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as subject id

  Scenario: PATCH Patch Update Subject returns successful response
    When I send a PATCH request to endpoint "patchUpdateSubject" with id "{STORED_SUBJECT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
