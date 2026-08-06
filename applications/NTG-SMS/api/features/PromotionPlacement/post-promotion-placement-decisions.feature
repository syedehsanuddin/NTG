@postDecisionPromotionPlacement

Feature: Post Decision Promotion Placement
  Validate POST /api/v1/promotion-placement/decisions endpoint

  Scenario: POST Post Decision Promotion Placement returns successful response
    When I send a POST request to endpoint "postDecisionPromotionPlacement" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
