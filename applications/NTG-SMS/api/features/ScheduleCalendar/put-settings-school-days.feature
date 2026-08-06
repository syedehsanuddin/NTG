@putSchoolDaySetting

Feature: Put School Day Setting
  Validate PUT /api/v1/settings/school-days endpoint

  Scenario: PUT Put School Day Setting returns successful response
    When I send a PUT request to endpoint "putSchoolDaySetting" with payload '{"name":"Automated Test"}'
    Then the response status should be 200
