@patchUpdateSection

Feature: Patch Update Section
  Validate PATCH /api/v1/sections/{id} endpoint

  Scenario: POST Create a new section returns successful response
    When I send a POST request to endpoint "postCreateSection" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as section id

  Scenario: PATCH Patch Update Section returns successful response
    When I send a PATCH request to endpoint "patchUpdateSection" with id "{STORED_SECTION_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
