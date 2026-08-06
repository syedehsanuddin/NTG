@getActiveAcademicYear

Feature: Get Active Academic Year
  Validate GET /api/v1/academic-years/active endpoint

  Scenario: GET Get Active Academic Year returns successful response
    When I send a GET request to endpoint "getActiveAcademicYear"
    Then the response status should be 200
