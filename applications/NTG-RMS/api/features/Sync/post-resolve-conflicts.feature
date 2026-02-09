@postResolveConflicts

Feature: Resolve sync conflicts
  Validate POST /api/v1/sync/resolve endpoint

  Scenario: POST Resolve sync conflicts returns successful response
    When I send a POST request to endpoint "postResolveConflicts" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
