@postCreateUniformIssuance

Feature: Post Create Uniform Issuance
  Validate POST /api/v1/uniform-issuances endpoint

  Scenario: POST Post Create Uniform Issuance returns successful response
    When I send a POST request to endpoint "postCreateUniformIssuance" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
