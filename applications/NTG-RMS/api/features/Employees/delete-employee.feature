@deleteEmployee @happyFlow

Feature: Delete an employee (soft delete)
  Validate DELETE /api/v1/employees/{id} endpoint

    @ahsan12344
    Scenario: POST Create a new employee returns successful response
    When I send a POST request to endpoint "postCreateEmployee" with payload '{"email":"{GENERATE_EMAIL}","name":"Automated Test User","roleIds":["f52d7970-553b-4f27-b813-da16f4430aaf"],"phone":"{GENERATE_PHONE}","nationalId":"12345678","dateOfBirth":"03-12","employmentType":"full_time","joiningDate":"2025-12-31","salary":20000,"isActive":true,"branchIds":["{BRANCH_ID}"],"createAuthAccount":true,"password":"12345678"}'
    Then the response status should be 201
    And I store the response id as employee id

  Scenario: DELETE Delete an employee (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteEmployee" with id "{STORED_EMPLOYEE_ID}"
    Then the response status should be 200
    And the response should equal '{"message":"Employee deleted successfully"}'
