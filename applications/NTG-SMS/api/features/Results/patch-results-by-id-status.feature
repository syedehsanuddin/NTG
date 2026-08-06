@patchStatuResult

Feature: Patch Statu Result
  Validate PATCH /api/v1/results/{id}/status endpoint

  Scenario: PATCH Patch Statu Result returns successful response
    When I send a PATCH request to endpoint "patchStatuResult" with id "{STORED_STATU_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
