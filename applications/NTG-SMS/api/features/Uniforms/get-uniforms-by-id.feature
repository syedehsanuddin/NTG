@getUniformById

Feature: Get Uniform By Id
  Validate GET /api/v1/uniforms/{id} endpoint

  Scenario: POST Create a new uniform returns successful response
    When I send a POST request to endpoint "postCreateUniform" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as uniform id

  Scenario: GET Get Uniform By Id returns successful response
    When I send a GET request to endpoint "getUniformById" with id "{STORED_UNIFORM_ID}"
    Then the response status should be 200
