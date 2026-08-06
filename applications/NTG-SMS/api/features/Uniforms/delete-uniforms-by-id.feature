@deleteUniform

Feature: Delete Uniform
  Validate DELETE /api/v1/uniforms/{id} endpoint

  Scenario: POST Create a new uniform returns successful response
    When I send a POST request to endpoint "postCreateUniform" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as uniform id

  Scenario: DELETE Delete Uniform returns successful response
    When I send a DELETE request to endpoint "deleteUniform" with id "{STORED_UNIFORM_ID}"
    Then the response status should be 200
