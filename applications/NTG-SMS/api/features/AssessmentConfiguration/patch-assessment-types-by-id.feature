@patchUpdateAssessmentType

Feature: Patch Update Assessment Type
  Validate PATCH /api/v1/assessment-types/{id} endpoint

  Scenario: POST Create a new assessmenttype returns successful response
    When I send a POST request to endpoint "postCreateAssessmentType" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as assessmenttype id

  Scenario: PATCH Patch Update Assessment Type returns successful response
    When I send a PATCH request to endpoint "patchUpdateAssessmentType" with id "{STORED_ASSESSMENTTYPE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
