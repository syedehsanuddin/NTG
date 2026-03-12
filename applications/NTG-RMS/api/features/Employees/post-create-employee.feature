@postCreateEmployee

Feature: Create a new employee
  Validate POST /api/v1/employees endpoint

  Scenario: POST Create a new employee returns successful response
    When I send a POST request to endpoint "postCreateEmployee" with payload '{"email":"{GENERATE_EMAIL}","name":"Auasdastomated Test User","roleIds":["f52d7970-553b-4f27-b813-da16f4430aaf"],"phone":"{GENERATE_PHONE}","nationalId":"12345678","dateOfBirth":"03-12","employmentType":"full_time","joiningDate":"2025-12-31","salary":20000,"isActive":true,"branchIds":["{BRANCH_ID}"],"createAuthAccount":true,"password":"12345678"}'
    Then the response status should be 201
    And the response should have field "id"
    And the response should have field "tenantId"
    And the response should have field "role"
