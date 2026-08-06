@getUniformRequests

Feature: Get Uniform Requests
  Validate GET /api/v1/uniform-requests endpoint

  Scenario: GET Get Uniform Requests returns successful response
    When I send a GET request to endpoint "getUniformRequests"
    Then the response status should be 200
