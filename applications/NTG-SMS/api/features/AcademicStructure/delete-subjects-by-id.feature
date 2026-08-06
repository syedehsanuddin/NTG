@deleteSubject

Feature: Delete Subject
  Validate DELETE /api/v1/subjects/{id} endpoint

  Scenario: POST Create a new subject returns successful response
    When I send a POST request to endpoint "postCreateSubject" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as subject id

  Scenario: DELETE Delete Subject returns successful response
    When I send a DELETE request to endpoint "deleteSubject" with id "{STORED_SUBJECT_ID}"
    Then the response status should be 200
