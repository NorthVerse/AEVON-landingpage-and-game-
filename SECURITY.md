# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in AEVON, please email security@aevon.dev with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Your name and affiliation (optional)

**Do not** publicly disclose the vulnerability until we've had 90 days to address it.

## Security Measures Implemented

### 1. Environment Variables & Secrets Management
- All sensitive configuration (API URLs, external service URLs) are stored in `.env` files
- `.env` files are **never** committed to version control (added to `.gitignore`)
- Use `.env.example` as a template for required environment variables
- Never hardcode API keys, tokens, or credentials in source code

### 2. Content Security Policy (CSP)
- Strict CSP header configured in `index.html`
- Restricts script execution to self and WebAssembly (necessary for Three.js)
- Limits external resource loading to specific approved origins
- Prevents inline script execution (except where necessary for styling)

### 3. Iframe Sandboxing
- External game iframe uses restrictive sandbox attributes
- Allows: same-origin, scripts, popups, forms
- Prevents: fullscreen, keyboard capture, camera/microphone access
- Uses `referrerPolicy="no-referrer"` to prevent sensitive headers leaking

### 4. Error Handling & Information Disclosure
- Stack traces and component stacks are **only** shown in development mode
- Production errors show generic messages to prevent leaking internal structure
- Detailed errors are logged to console for developers (dev mode only)
- Users do not see file paths, function names, or implementation details

### 5. HTTP Security Headers
- `X-Content-Type-Options: nosniff` - prevents MIME type sniffing
- `X-Frame-Options: SAMEORIGIN` - prevents clickjacking
- `Referrer-Policy: no-referrer` - prevents referrer leakage
- `X-UA-Compatible: IE=edge` - enforces modern rendering

### 6. Input Validation & Sanitization
- This is a frontend-only React application
- No direct database access or server-side processing
- Future API interactions should:
  - Validate all user inputs server-side (never trust client-side only)
  - Use parameterized queries / ORMs for database access
  - Implement rate limiting on all endpoints
  - Require authentication for sensitive operations

### 7. Dependency Security
- All npm packages regularly audited via `npm audit`
- Vulnerable dependencies are updated immediately
- Only trusted, well-maintained packages are used
- Development dependencies are excluded from production builds

### 8. CORS Configuration
- Development server restricts CORS to localhost origins
- Production deployment should configure CORS for specific trusted domains only
- Wildcard CORS (`*`) should never be used in production

### 9. Source Maps
- Production builds do **not** include source maps
- Source maps are only generated in development mode
- This prevents exposing original source code in production

### 10. XSS Protection
- React automatically escapes content by default
- `dangerouslySetInnerHTML` is never used with user-generated content
- External content loading is restricted via CSP
- All user-facing content is properly escaped

## Security Best Practices Going Forward

### Before Deploying to Production

1. **Environment Variables**
   - Update all `.env` variables with production values
   - Use HTTPS URLs for all external resources
   - Never include test credentials

2. **CORS Settings**
   - Update `vite.config.js` server.cors with actual production domains
   - Configure reverse proxy/server to add proper CORS headers
   - **DECISION NEEDED**: List the actual production domain(s) where this will be hosted

3. **CSP Header**
   - Review the CSP policy in `index.html`
   - Update `frame-src` if game URL changes
   - Update `img-src` if you add image CDN origins
   - Test with browser DevTools to catch any CSP violations

4. **API Integration**
   - When adding backend APIs:
     - Implement input validation on server
     - Use parameterized queries for databases
     - Add rate limiting (e.g., express-rate-limit)
     - Implement proper authentication/authorization
     - Return generic error messages to clients
     - Log detailed errors server-side only

5. **Static Hosting**
   - Deploy via HTTPS only
   - Configure security headers on web server:
     - `Strict-Transport-Security: max-age=31536000; includeSubDomains`
     - `X-Content-Type-Options: nosniff`
     - `X-Frame-Options: SAMEORIGIN`
     - `Referrer-Policy: no-referrer`
     - `Permissions-Policy: ...`

### Third-Party Integrations

- **Unsplash Images**: Currently loading from `https://images.unsplash.com`
  - CSP allows this via `img-src https:`
  - No sensitive data in image URLs

- **Google Fonts**: Loaded from googleapis.com and gstatic.com
  - Whitelisted in CSP
  - Uses preconnect for performance

- **Culture Canvas Game**: Loaded via iframe from vercel.app
  - CSP restricts frame-src to this specific origin
  - Uses sandbox attributes for isolation

### Regular Security Audits

- Run `npm audit` regularly
- Review CSP violations in browser console
- Monitor error logs for suspicious patterns
- Update dependencies as new versions are released

## Known Limitations

This is a **frontend-only** application with no backend server code. Security considerations for a complete production system would include:

- User authentication system
- Database access and protection
- API rate limiting
- Request logging and monitoring
- Data encryption in transit and at rest
- Regular penetration testing
- Security incident response plan

These items are out of scope for this frontend audit but should be addressed when adding backend functionality.

## Security Checklist for Deployment

- [ ] All `.env` variables configured with production values
- [ ] HTTPS enabled for all external resources
- [ ] CSP policy tested in target browsers
- [ ] CORS configured for production domain(s)
- [ ] Source maps disabled in production build
- [ ] Error messages reviewed for info leakage
- [ ] Security headers configured on web server
- [ ] npm dependencies up-to-date (`npm audit` shows 0 vulnerabilities)
- [ ] No hardcoded secrets in git history
- [ ] `.env` files in `.gitignore`
- [ ] Team trained on security best practices
- [ ] Incident response plan documented
