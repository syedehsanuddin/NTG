@getPublicClassCountReport

Feature: Get Public Class Count Report
  Validate GET /api/v1/reports/public/class-counts endpoint

  Scenario: GET Get Public Class Count Report returns successful response
    When I send a GET request to endpoint "getPublicClassCountReport"
    Then the response status should be 200
