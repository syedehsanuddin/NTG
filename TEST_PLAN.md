# NTG Ticket System - Test Plan

**Project:** NTG Ticket Automation (NTA)  
**Version:** 1.0  
**Last Updated:** 2024  
**Author:** Ahsan Uddin

---

## 1. Introduction

### 1.1 Purpose
This document outlines the comprehensive test plan for the NTG Ticket System, covering both API and UI automation testing using Playwright with TypeScript and Cucumber BDD framework.

### 1.2 Scope
- **API Testing:** RESTful API endpoints for Tickets, Users, and Comments modules
- **UI Testing:** User interface testing for ticket management workflows
- **Test Framework:** Playwright + TypeScript + Cucumber BDD

### 1.3 Test Environment
- **API Base URL:** `http://192.168.50.50:4000`
- **UI Base URL:** `http://192.168.50.50:8080`
- **Browser:** Desktop Chrome
- **Viewport:** 1920x1080

---

## 2. Test Strategy

### 2.1 Testing Types
- **Functional Testing:** API endpoints and UI workflows
- **Regression Testing:** Tagged scenarios for regression suite
- **Happy Path Testing:** Core functionality validation
- **Data Validation:** Request/response validation
- **Integration Testing:** End-to-end workflows

### 2.2 Test Approach
- **BDD (Behavior-Driven Development):** API tests using Gherkin syntax
- **Page Object Model:** UI tests using POM pattern
- **Test Data Management:** Dynamic test data generation
- **Cleanup:** Automatic test data cleanup after execution

---

## 3. Test Modules

### 3.1 API Tests - Tickets Module

#### 3.1.1 Create Ticket (POST)
**File:** `applications/ntg-ticket/api/features/Tickets/postTickets.feature`  
**Tags:** `@postTicket`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-001 | POST Ticket with valid payload returns successful response | High | ✅ |
| TC-API-TKT-002 | POST Ticket response contains correct data values | High | ✅ |
| TC-API-TKT-003 | POST Ticket with different category, subcategory, priority, impact, and urgency values | Medium | ✅ |
| TC-API-TKT-004 | POST Ticket response has valid data types | Medium | ✅ |
| TC-API-TKT-005 | POST Ticket response has required timestamp fields | Low | ✅ |

**Coverage:**
- Valid payload validation
- Response status code (201)
- Response data structure validation
- Data type validation
- Field value validation

#### 3.1.2 Get Tickets (GET)
**File:** `applications/ntg-ticket/api/features/Tickets/getTickets.feature`  
**Tags:** `@getTickets @happyflow @regression`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-006 | GET Tickets returns successful response with default parameters | High | ✅ |
| TC-API-TKT-007 | GET Tickets with page and limit returns paged results | High | ✅ |
| TC-API-TKT-008 | GET Tickets with priority filter returns matching tickets | Medium | ✅ |
| TC-API-TKT-009 | GET Tickets with search parameter returns matching tickets | Medium | ✅ |
| TC-API-TKT-010 | GET Tickets with date range returns tickets in date range | Medium | ✅ |

**Coverage:**
- Default pagination
- Custom pagination (page, limit)
- Priority filtering
- Search functionality
- Date range filtering

#### 3.1.3 Get Ticket By ID (GET)
**File:** `applications/ntg-ticket/api/features/Tickets/getTicketById.feature`  
**Tags:** `@getTicketById @regression`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-011 | GET Ticket by ID returns ticket data, then 404 after deletion | High | ✅ |

**Coverage:**
- Single ticket retrieval
- 404 handling after deletion

#### 3.1.4 Update Ticket Status (PATCH)
**File:** `applications/ntg-ticket/api/features/Tickets/patchUpdateStatus.feature`  
**Tags:** `@patchUpdateStatus @happyflow @regression`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-012 | PATCH Ticket status to OPEN after creation | High | ✅ |

**Coverage:**
- Status update functionality
- Status validation

#### 3.1.5 Update Ticket Assignee (PATCH)
**File:** `applications/ntg-ticket/api/features/Tickets/patchUpdateAssignee.feature`  
**Tags:** `@patchUpdateAssignee`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-013 | Update ticket assignee | High | ✅ |

**Coverage:**
- Assignee update functionality

#### 3.1.6 Get My Tickets (GET)
**File:** `applications/ntg-ticket/api/features/Tickets/getMyTickets.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-014 | GET My Tickets returns user's tickets | High | ✅ |

**Coverage:**
- User-specific ticket retrieval

#### 3.1.7 Get Assigned Tickets (GET)
**File:** `applications/ntg-ticket/api/features/Tickets/getAssignedTickets.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-015 | GET Assigned Tickets returns assigned tickets | High | ✅ |

**Coverage:**
- Assigned ticket retrieval

#### 3.1.8 Get Overdue Tickets (GET)
**File:** `applications/ntg-ticket/api/features/Tickets/getOverdueTickets.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-016 | GET Overdue Tickets returns overdue tickets | Medium | ✅ |

**Coverage:**
- Overdue ticket filtering

#### 3.1.9 Get SLA Approaching Tickets (GET)
**File:** `applications/ntg-ticket/api/features/Tickets/getSlaApproaching.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-017 | GET SLA Approaching Tickets returns approaching SLA tickets | Medium | ✅ |

**Coverage:**
- SLA approaching ticket filtering

#### 3.1.10 Get SLA Breached Tickets (GET)
**File:** `applications/ntg-ticket/api/features/Tickets/getSlaBreached.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-TKT-018 | GET SLA Breached Tickets returns breached SLA tickets | Medium | ✅ |

**Coverage:**
- SLA breached ticket filtering

---

### 3.2 API Tests - Users Module

#### 3.2.1 Get All Users (GET)
**File:** `applications/ntg-ticket/api/features/Users/getAllUsers.feature`  
**Tags:** `@getAllUsers @happyflow @usersHappyFlow @regression`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-USR-001 | GET All Users with limit returns exact number of records | High | ✅ |
| TC-API-USR-002 | GET All Users with search filter returns matching users | Medium | ✅ |
| TC-API-USR-003 | GET All Users with role filter returns only that role | High | ✅ |
| TC-API-USR-004 | GET All Users with isActive true returns only active users | Medium | ✅ |
| TC-API-USR-005 | GET All Users with page and limit returns paged data | High | ✅ |

**Coverage:**
- Pagination
- Search filtering
- Role filtering
- Active status filtering

#### 3.2.2 Get User By ID (GET)
**File:** `applications/ntg-ticket/api/features/Users/getUserById.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-USR-006 | GET User by ID returns user data | High | ✅ |

**Coverage:**
- Single user retrieval

#### 3.2.3 Create User (POST)
**File:** `applications/ntg-ticket/api/features/Users/postUser.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-USR-007 | POST User creates new user successfully | High | ✅ |

**Coverage:**
- User creation
- Response validation

#### 3.2.4 Update User (PATCH)
**File:** `applications/ntg-ticket/api/features/Users/patchUserById.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-USR-008 | PATCH User updates user data | High | ✅ |

**Coverage:**
- User update functionality

#### 3.2.5 Delete User (DELETE)
**File:** `applications/ntg-ticket/api/features/Users/deleteUser.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-USR-009 | DELETE User removes user successfully | High | ✅ |

**Coverage:**
- User deletion
- 404 handling after deletion

#### 3.2.6 Get Support Staff (GET)
**File:** `applications/ntg-ticket/api/features/Users/getSupportStaff.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-USR-010 | GET Support Staff returns support staff users | Medium | ✅ |

**Coverage:**
- Support staff filtering

#### 3.2.7 Get Support Managers (GET)
**File:** `applications/ntg-ticket/api/features/Users/getSupportManagers.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-USR-011 | GET Support Managers returns manager users | Medium | ✅ |

**Coverage:**
- Manager role filtering

---

### 3.3 API Tests - Comments Module

#### 3.3.1 Create Comment (POST)
**File:** `applications/ntg-ticket/api/features/Comments/postComment.feature`  
**Tags:** `@postComment @happyflow @regression`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-CMT-001 | POST Comment for a newly created ticket returns successful response | High | ✅ |

**Coverage:**
- Comment creation
- Ticket association
- Response validation

#### 3.3.2 Update Comment (PATCH)
**File:** `applications/ntg-ticket/api/features/Comments/patchComment.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-CMT-002 | PATCH Comment updates comment content | High | ✅ |

**Coverage:**
- Comment update functionality

#### 3.3.3 Delete Comment (DELETE)
**File:** `applications/ntg-ticket/api/features/Comments/deleteComment.feature`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-API-CMT-003 | DELETE Comment removes comment successfully | High | ✅ |

**Coverage:**
- Comment deletion
- Response validation

---

### 3.4 UI Tests - Tickets Module

#### 3.4.1 Create Ticket (UI)
**File:** `applications/ntg-ticket/ui/tests/tickets/createTicket.spec.ts`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-UI-TKT-001 | Should create a ticket successfully | High | ✅ |
| TC-UI-TKT-002 | Should validate required fields | Medium | ⏸️ (Commented) |
| TC-UI-TKT-003 | Should cancel ticket creation | Low | ⏸️ (Commented) |
| TC-UI-TKT-004 | Should create ticket with different priority values | Medium | ⏸️ (Commented) |

**Coverage:**
- Ticket creation form
- Form submission
- Navigation to ticket detail page
- Ticket title validation

#### 3.4.2 View Ticket List (UI)
**File:** `applications/ntg-ticket/ui/tests/tickets/viewTicketList.spec.ts`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-UI-TKT-005 | Should display ticket list | High | ✅ |
| TC-UI-TKT-006 | Should search tickets | Medium | ✅ |
| TC-UI-TKT-007 | Should filter tickets by status | Medium | ✅ |
| TC-UI-TKT-008 | Should filter tickets by priority | Medium | ✅ |
| TC-UI-TKT-009 | Should navigate to ticket details | High | ✅ |

**Coverage:**
- Ticket list display
- Search functionality
- Status filtering
- Priority filtering
- Navigation to detail page

---

### 3.5 UI Tests - Comments Module

#### 3.5.1 Add Comment (UI)
**File:** `applications/ntg-ticket/ui/tests/comments/addComment.spec.ts`

| Test Case ID | Scenario | Priority | Status |
|-------------|----------|----------|--------|
| TC-UI-CMT-001 | Should add a comment to a ticket | High | ✅ |
| TC-UI-CMT-002 | Should add an internal comment | Medium | ✅ |
| TC-UI-CMT-003 | Should display multiple comments | Medium | ✅ |

**Coverage:**
- Comment addition
- Internal comment handling
- Multiple comments display

---

## 4. Test Execution

### 4.1 Test Execution Commands

```bash
# Run all tests
npm test

# Run API tests only
npx playwright test --project=api-tests

# Run UI tests only
npx playwright test --project=ui-tests

# Run with UI mode
npm run test:ui

# Run in headed mode
npm run test:headed

# Show test report
npm run show-report
```

### 4.2 Test Tags

**Regression Suite:** `@regression`  
**Happy Path:** `@happyflow`  
**Module Tags:** `@postTicket`, `@getTickets`, `@getAllUsers`, etc.

### 4.3 Test Execution Strategy
- **Smoke Tests:** Critical path scenarios
- **Regression Tests:** Full suite before releases
- **Feature Tests:** New feature validation
- **CI/CD Integration:** Automated execution on commits

---

## 5. Test Metrics

### 5.1 Test Coverage Summary

| Module | API Tests | UI Tests | Total |
|--------|-----------|----------|-------|
| Tickets | 18 | 9 | 27 |
| Users | 11 | 0 | 11 |
| Comments | 3 | 3 | 6 |
| **Total** | **32** | **12** | **44** |

### 5.2 Test Status Distribution
- ✅ **Active:** 40 test cases
- ⏸️ **Commented/Pending:** 4 test cases

---

## 6. Risk Assessment

### 6.1 High-Risk Areas
- Ticket creation and status updates
- User authentication and authorization
- Data integrity in ticket assignments

### 6.2 Test Priorities
- **High Priority:** Core CRUD operations, authentication
- **Medium Priority:** Filtering, search, pagination
- **Low Priority:** Edge cases, UI validations

---

## 7. Test Deliverables

1. ✅ Automated test scripts (API & UI)
2. ✅ Test execution reports (HTML)
3. ✅ Test plan documentation
4. ✅ Test management structure
5. ✅ CI/CD integration (if configured)

---

## 8. Maintenance

### 8.1 Test Maintenance Schedule
- Review and update test cases monthly
- Update test data as needed
- Refactor tests for maintainability

### 8.2 Test Case Updates
- Add new test cases for new features
- Update existing tests for changed requirements
- Remove obsolete test cases

---

## 9. Appendix

### 9.1 Test File Structure
```
applications/ntg-ticket/
├── api/
│   ├── features/
│   │   ├── Tickets/ (11 feature files)
│   │   ├── Users/ (7 feature files)
│   │   └── Comments/ (3 feature files)
│   └── step-definitions/
└── ui/
    ├── tests/
    │   ├── tickets/ (2 spec files)
    │   └── comments/ (1 spec file)
    └── pages/ (Page Object Models)
```

### 9.2 References
- Playwright Documentation: https://playwright.dev
- Cucumber BDD: https://cucumber.io
- Project Repository: [Your GitHub Repo URL]

---

**Document Version:** 1.0  
**Last Reviewed:** 2024

