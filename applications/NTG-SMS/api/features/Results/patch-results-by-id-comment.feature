@patchCommentResult

Feature: Patch Comment Result
  Validate PATCH /api/v1/results/{id}/comment endpoint

  Scenario: PATCH Patch Comment Result returns successful response
    When I send a PATCH request to endpoint "patchCommentResult" with id "{STORED_COMMENT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
