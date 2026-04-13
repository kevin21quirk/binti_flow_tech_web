# Investment Proposal Integration Configuration

## Overview
The Binti Flow Tech website includes an Investment Opportunity section on the "Our Story" page that links to the separate Binti Investment Proposal project.

## Components

### 1. Investment Login Component
**Location:** `components/InvestmentLogin.tsx`

This modal component handles authentication for accessing the investment proposal. It includes:
- Email and password/access code fields
- Login form with validation
- Link to contact form for users without access
- Redirect to investment proposal upon successful login

### 2. Story Page Integration
**Location:** `app/about/story/page.tsx`

The Investment Opportunity section includes:
- Two interactive cards:
  - **Access Investment Proposal**: Opens the login modal
  - **Learn More**: Links to the contact form
- Animated background elements
- Information about accredited investor requirements

## Configuration Steps

### Current Setup (Development)
The login component currently redirects to `http://localhost:3001` (line 31 in `InvestmentLogin.tsx`).

### Production Setup
When deploying to production, update the redirect URL in `components/InvestmentLogin.tsx`:

```typescript
// Line 31 - Update this URL to your deployed investment proposal site
window.open('http://localhost:3001', '_blank')
```

Replace with your actual deployment URL, for example:
- `https://invest.bintiflowtech.com`
- `https://binti-investment-proposal.vercel.app`
- Or any other hosting URL where the investment proposal is deployed

### Authentication Implementation
The current implementation uses a simple client-side check. For production, you should:

1. **Set up a backend API** to handle authentication
2. **Store credentials securely** (e.g., in a database)
3. **Use JWT tokens** or session management
4. **Implement proper security measures**:
   - HTTPS only
   - Rate limiting
   - Password hashing
   - Email verification

### Recommended Production Flow
1. User enters email and access code
2. Credentials sent to backend API
3. Backend validates credentials
4. Backend generates secure token
5. Token stored in session/localStorage
6. User redirected to investment proposal with token
7. Investment proposal validates token before showing content

## Related Projects

### Binti Investment Proposal
**Location:** `C:\Users\kevin\CascadeProjects\Binti Investment Proposal`

This is a separate Next.js project containing the interactive pitch deck with:
- 14 professional slides
- Market analysis and financial projections
- Technology roadmap
- Investment terms

To deploy this project, follow its README.md instructions.

## Contact Form Integration
Users without access credentials can click "Learn More" which redirects them to `/contact` where they can:
- Select "Investment Opportunity" as the subject
- Send an inquiry to the team
- Request access credentials

## Testing
1. Start the main website: `npm run dev` (default port 3000)
2. Start the investment proposal: `cd "C:\Users\kevin\CascadeProjects\Binti Investment Proposal" && npm run dev` (port 3001)
3. Navigate to `/about/story` on the main website
4. Scroll to the Investment Opportunity section
5. Click "Access Investment Proposal"
6. Enter any email and password to test the redirect

## Future Enhancements
- Implement real authentication backend
- Add password reset functionality
- Email verification for new investor accounts
- Analytics tracking for investment interest
- Integration with CRM for investor relations
