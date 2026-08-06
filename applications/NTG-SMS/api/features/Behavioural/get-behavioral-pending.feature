@getPendingBehavioral

Feature: Get Pending Behavioral
  Validate GET /api/v1/behavioral/pending endpoint

  Scenario: GET Get Pending Behavioral returns successful response
    When I send a GET request to endpoint "getPendingBehavioral"
    Then the response status should be 200
