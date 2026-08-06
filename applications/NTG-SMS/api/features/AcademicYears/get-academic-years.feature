@getAcademicYears

Feature: Get Academic Years
  Validate GET /api/v1/academic-years endpoint

  Scenario: GET Get Academic Years returns successful response
    When I send a GET request to endpoint "getAcademicYears"
    Then the response status should be 200
