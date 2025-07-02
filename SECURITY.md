# Security Guidelines

## 🛡️ Security Best Practices

### Credentials Management
- **NEVER** commit credentials, API keys, or secrets to version control
- Use environment variables for sensitive configuration
- Review all files before committing with `git diff --cached`
- Use pre-commit hooks to scan for secrets

### Recommended Tools
- [git-secrets](https://github.com/awslabs/git-secrets) - Prevents committing secrets
- [gitleaks](https://github.com/zricethezav/gitleaks) - Detects secrets in git repos
- [pre-commit](https://pre-commit.com/) - Git hooks for security checks

### Environment Variables
```bash
# Good: Use environment variables
REACT_APP_API_URL=https://api.example.com

# Bad: Hardcoded in source code
const apiKey = "sk-1234567890abcdef";
```

### .gitignore Security Patterns
The `.gitignore` file includes comprehensive patterns to prevent accidental commits of:
- Credentials and keys (`*.key`, `*.pem`, `*token*`, `*secret*`)
- Cloud service files (`service-account*.json`, `gha-creds-*.json`)
- Environment configuration (`.env*`, `.aws/`, `.gcp/`)

### Dependency Security
- Run `npm audit` or `yarn audit` regularly
- Keep dependencies updated via Dependabot
- Review security advisories in GitHub Security tab

### Incident Response
If credentials are accidentally committed:
1. **Immediately** revoke/rotate the compromised credentials
2. Remove from git history: `git filter-branch` or BFG Repo-Cleaner
3. Force push: `git push --force-with-lease`
4. Check access logs for unauthorized usage
5. Update security documentation

## 🔍 Security Scanning Commands

```bash
# Check for secrets in current repository
git log --all --full-history -p | grep -i "password\|token\|key\|secret"

# Audit dependencies
yarn audit

# Check for credential files
find . -name "*cred*" -o -name "*key*" -o -name "*secret*" | grep -v node_modules
```

## 📞 Reporting Security Issues
If you discover a security vulnerability, please report it privately via GitHub Security Advisories. 