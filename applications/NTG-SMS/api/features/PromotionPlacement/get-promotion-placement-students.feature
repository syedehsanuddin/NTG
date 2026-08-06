@getStudentPromotionPlacement

Feature: Get Student Promotion Placement
  Validate GET /api/v1/promotion-placement/students endpoint

  Scenario: GET Get Student Promotion Placement returns successful response
    When I send a GET request to endpoint "getStudentPromotionPlacement"
    Then the response status should be 200
