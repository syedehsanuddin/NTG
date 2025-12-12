# API Contract Validation

This tool validates API contracts by comparing the current Swagger/OpenAPI specification with a baseline snapshot.

## 📁 Files

- **`validateApiContract.ts`** - Main validation script
- **`api-contract.config.json`** - Configuration file (Swagger URL, options)
- **`api-contract-baseline.json`** - Baseline snapshot (auto-generated)

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

This will install `axios` which is required for fetching Swagger specs.

### Step 2: Configure Swagger URL

Edit `api-contract.config.json` and add your Swagger URL:

```json
{
  "swaggerUrl": "https://your-api.com/swagger.json",
  ...
}
```

**OR** pass it as a command-line argument (see Step 3).

### Step 3: Create Baseline (First Time Only)

Run this command to create the initial baseline:

```bash
npm run validate-api:update
```

Or with URL as argument:

```bash
npm run validate-api --update https://your-api.com/swagger.json
```

This will:
- Fetch the Swagger spec
- Extract all endpoints
- Save them to `api-contract-baseline.json`

### Step 4: Validate API Contract

Run validation to check if API has changed:

```bash
npm run validate-api
```

Or with URL:

```bash
npm run validate-api https://your-api.com/swagger.json
```

## 📊 What It Checks

1. **Endpoint Count** - Compares total number of endpoints
2. **Missing Endpoints** - Endpoints that were removed
3. **New Endpoints** - Endpoints that were added
4. **Changed Endpoints** - Endpoints with different HTTP methods

## 📝 Example Output

### ✅ When Everything Matches:

```
📊 API Contract Validation Results
================================================================================
📈 Endpoint Count:
   Baseline: 25
   Current:  25
   ✅ Count matches!

================================================================================
✅ All endpoints match! API contract is consistent.
================================================================================
```

### ⚠️ When Changes Detected:

```
📊 API Contract Validation Results
================================================================================
📈 Endpoint Count:
   Baseline: 25
   Current:  27
   ⚠️  Count mismatch! Difference: 2

➕ New Endpoints (2):
   + /api/v1/users/{id}/profile [GET]
   + /api/v1/tickets/{id}/comments [POST]

❌ Missing Endpoints (1):
   - /api/v1/old-endpoint [DELETE]

================================================================================
⚠️  API contract changes detected!
================================================================================
```

## 🔧 Configuration Options

Edit `api-contract.config.json`:

```json
{
  "swaggerUrl": "https://your-api.com/swagger.json",
  "options": {
    "updateBaselineOnMatch": false,  // Auto-update baseline when matches
    "failOnMismatch": true,          // Exit with error code on mismatch
    "ignoreDeprecated": false         // Ignore deprecated endpoints
  }
}
```

## 📋 Commands

| Command | Description |
|---------|-------------|
| `npm run validate-api` | Validate API contract against baseline |
| `npm run validate-api:update` | Update/create baseline snapshot |
| `npm run validate-api <url>` | Validate with URL (overrides config) |

## 🔄 Workflow

1. **Initial Setup:**
   ```bash
   # Set Swagger URL in config.json
   npm run validate-api:update
   ```

2. **Regular Validation:**
   ```bash
   # Run before releases or in CI/CD
   npm run validate-api
   ```

3. **Update Baseline (when API changes are intentional):**
   ```bash
   # After confirming API changes are correct
   npm run validate-api:update
   ```

## 🎯 Use Cases

- **CI/CD Integration** - Fail builds when API contract changes unexpectedly
- **Release Validation** - Ensure API stability before releases
- **Documentation Sync** - Detect when Swagger docs are out of sync
- **Breaking Change Detection** - Identify removed or changed endpoints

## 💡 Tips

- Commit `api-contract-baseline.json` to version control
- Run validation in CI/CD pipeline
- Update baseline only when API changes are intentional
- Use `failOnMismatch: true` in CI/CD to fail builds on changes

## 🐛 Troubleshooting

**Error: "Swagger URL is required"**
- Set `swaggerUrl` in `api-contract.config.json` OR
- Pass URL as command-line argument

**Error: "Neither axios nor fetch is available"**
- Run `npm install` to install axios

**Error: "HTTP error! status: 404"**
- Check if Swagger URL is correct
- Ensure Swagger endpoint is accessible

