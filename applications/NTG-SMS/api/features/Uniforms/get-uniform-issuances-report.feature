@getReportUniformIssuance

Feature: Get Report Uniform Issuance
  Validate GET /api/v1/uniform-issuances/report endpoint

  Scenario: GET Get Report Uniform Issuance returns successful response
    When I send a GET request to endpoint "getReportUniformIssuance"
    Then the response status should be 200
