@putUpdateUniform

Feature: Put Update Uniform
  Validate PUT /api/v1/uniforms/{id} endpoint

  Scenario: POST Create a new uniform returns successful response
    When I send a POST request to endpoint "postCreateUniform" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as uniform id

  Scenario: PUT Put Update Uniform returns successful response
    When I send a PUT request to endpoint "putUpdateUniform" with id "{STORED_UNIFORM_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
