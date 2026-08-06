@postCreateUniformRequest

Feature: Post Create Uniform Request
  Validate POST /api/v1/uniform-requests endpoint

  Scenario: POST Post Create Uniform Request returns successful response
    When I send a POST request to endpoint "postCreateUniformRequest" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
