@getUniforms

Feature: Get Uniforms
  Validate GET /api/v1/uniforms endpoint

  Scenario: GET Get Uniforms returns successful response
    When I send a GET request to endpoint "getUniforms"
    Then the response status should be 200
