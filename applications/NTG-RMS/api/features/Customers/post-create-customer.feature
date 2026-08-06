# @postCreateCustomerExplicit @ahsan133 @happyFlow

Feature: Create a new customer
  Validate POST /api/v1/customers endpoint

  Scenario: POST Create a new customer returns successful response
    When I send a POST request to endpoint "postCreateCustomer" with payload '{"name":"Test User Automated","phone":"{GENERATE_PHONE}","email":"{GENERATE_CUSTOMER_EMAIL}","dateOfBirth":"12-12","preferredLanguage":"en","notes":"Test User","address":{"label":"home","address":"H1338 P6 Bahria Town","city":"Karachi","country":"Pakistan"}}' and headers 'branchId={BRANCH_ID}'
    Then the response status should be 201
    # And the response should have field "data"
