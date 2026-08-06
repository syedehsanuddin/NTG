@postCreateTimingTemplate

Feature: Post Create Timing Template
  Validate POST /api/v1/timing-templates endpoint

  Scenario: POST Post Create Timing Template returns successful response
    When I send a POST request to endpoint "postCreateTimingTemplate" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
