@postCreateUniform

Feature: Post Create Uniform
  Validate POST /api/v1/uniforms endpoint

  Scenario: POST Post Create Uniform returns successful response
    When I send a POST request to endpoint "postCreateUniform" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
