@getClassSectionById

Feature: Get Class Section By Id
  Validate GET /api/v1/class-sections/{id} endpoint

  Scenario: POST Create a new classsection returns successful response
    When I send a POST request to endpoint "postCreateClassSection" with payload '"string"'
    Then the response status should be 201
    And I store the response id as classsection id

  Scenario: GET Get Class Section By Id returns successful response
    When I send a GET request to endpoint "getClassSectionById" with id "{STORED_CLASSSECTION_ID}"
    Then the response status should be 200
