@getAssociationParent

Feature: Get Association Parent
  Validate GET /api/v1/parents/associations endpoint

  Scenario: GET Get Association Parent returns successful response
    When I send a GET request to endpoint "getAssociationParent"
    Then the response status should be 200
