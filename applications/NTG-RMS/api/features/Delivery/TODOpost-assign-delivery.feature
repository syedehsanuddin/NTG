@postAssignDelivery

Feature: Assign delivery to personnel
  Validate POST /api/v1/delivery/assign endpoint

  Scenario: POST Assign delivery to personnel returns successful response
    When I send a POST request to endpoint "postAssignDelivery" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
