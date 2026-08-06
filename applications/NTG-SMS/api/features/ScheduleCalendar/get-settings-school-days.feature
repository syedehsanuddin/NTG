@getSchoolDaySetting

Feature: Get School Day Setting
  Validate GET /api/v1/settings/school-days endpoint

  Scenario: GET Get School Day Setting returns successful response
    When I send a GET request to endpoint "getSchoolDaySetting"
    Then the response status should be 200
