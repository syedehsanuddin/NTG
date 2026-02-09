@deleteEmployee

Feature: Delete an employee (soft delete)
  Validate DELETE /api/v1/employees/{id} endpoint


    Scenario: POST Create a new employee returns successful response
    When I send a POST request to endpoint "postCreateEmployee" with payload '{"email":"{GENERATE_EMAIL}","name":"Automdssddaated Test User","roleIds":["70a5f79e-eb71-49c0-b958-b6f463c01fe3"],"phone":"{GENERATE_PHONE}","nationalId":"12345678","dateOfBirth":"2025-12-31","employmentType":"full_time","joiningDate":"2025-12-31","salary":20000,"isActive":true,"branchIds":["bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191"],"createAuthAccount":true,"password":"12345678"}'
    Then the response status should be 201
    And I store the response id as employee id

  Scenario: DELETE Delete an employee (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteEmployee" with id "{STORED_EMPLOYEE_ID}"
    Then the response status should be 200
    And the response should equal '{"message":"Employee deleted successfully"}'
