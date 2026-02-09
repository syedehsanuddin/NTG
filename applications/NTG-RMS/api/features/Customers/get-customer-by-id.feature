@getCustomerById

Feature: Get customer by ID with order history
  Validate GET /api/v1/customers/{id} endpoint


  
  Scenario: POST Create a new customer returns successful response
    When I send a POST request to endpoint "postCreateCustomer" with payload '{"name":"Test User Automated","phone":"{GENERATE_PHONE}","email":"{GENERATE_CUSTOMER_EMAIL}","dateOfBirth":"2025-12-31","preferredLanguage":"en","notes":"Test User","address":{"label":"home","address":"H1338 P6 Bahria Town","city":"Karachi","country":"Pakistan"}}' and headers 'branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191'
    Then the response status should be 201
    And I store the response id as customer id

  Scenario: GET Get customer by ID with order history returns successful response
    When I send a GET request to endpoint "getCustomerById" with id "{STORED_CUSTOMER_ID}" and headers "language=en"
    Then the response status should be 200
    And the response should have field "id"
    And the response should have field "email"
    And the response should have field "name"
