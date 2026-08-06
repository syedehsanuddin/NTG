@getUniformRequestById

Feature: Get Uniform Request By Id
  Validate GET /api/v1/uniform-requests/{id} endpoint

  Scenario: POST Create a new uniformrequest returns successful response
    When I send a POST request to endpoint "postCreateUniformRequest" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as uniformrequest id

  Scenario: GET Get Uniform Request By Id returns successful response
    When I send a GET request to endpoint "getUniformRequestById" with id "{STORED_UNIFORMREQUEST_ID}"
    Then the response status should be 200
