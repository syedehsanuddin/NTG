@getTimingTemplates

Feature: Get Timing Templates
  Validate GET /api/v1/timing-templates endpoint

  Scenario: GET Get Timing Templates returns successful response
    When I send a GET request to endpoint "getTimingTemplates"
    Then the response status should be 200
