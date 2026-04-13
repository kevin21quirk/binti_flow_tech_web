# Binti Flow Tech - Authentication System Guide

## Overview
A complete authentication system for managing investor access to the investment proposal pitch deck.

## System Architecture

### Components

1. **Authentication Library** (`lib/auth.ts`)
   - User management functions
   - Authentication logic
   - Uses localStorage for user storage
   - Uses sessionStorage for current user session

2. **Auth Context** (`contexts/AuthContext.tsx`)
   - Global authentication state
   - React Context for auth throughout the app

3. **Admin Portal** (`/admin/login` & `/admin/dashboard`)
   - Admin login page
   - User management dashboard
   - Create/delete investor accounts

4. **Investor Login** (Investment Opportunity section on `/about/story`)
   - Modal login for investors
   - Validates credentials
   - Redirects to pitch deck

5. **Protected Route** (`/investors/proposal`)
   - Investment pitch deck
   - Only accessible to authenticated users

## Default Credentials

### Admin Account
- **Email:** `admin@bintiflowtech.com`
- **Password:** `BintiAdmin2026!`
- **Access:** Full admin dashboard + investment proposal

## How to Use

### For You (Admin)

1. **Access Admin Portal:**
   - Navigate to: `http://localhost:3000/admin/login`
   - Login with admin credentials above
   - You'll be redirected to the admin dashboard

2. **View Investment Proposal:**
   - From admin dashboard, click "View Proposal" button
   - Or navigate directly to `/investors/proposal` after logging in

3. **Create New Investor Account:**
   - In admin dashboard, click "Add New Investor"
   - Enter investor's name (optional), email, and password
   - Click "Create Investor Account"
   - Share these credentials with the investor

4. **Manage Investors:**
   - View all investor accounts in the table
   - See their credentials (email and password)
   - Delete accounts using the trash icon

### For Investors

1. **Access Investment Proposal:**
   - Navigate to: `http://localhost:3000/about/story`
   - Scroll to the bottom "Investment Opportunity" section
   - Click "Access Investment Proposal" card
   - Enter credentials provided by admin
   - Click "Access Proposal"

2. **View Pitch Deck:**
   - Navigate through 19 slides using arrow buttons
   - Click dots at bottom for direct slide access
   - Use keyboard arrow keys for navigation

## User Roles

### Admin
- Can view investment proposal
- Can create new investor accounts
- Can delete investor accounts
- Can view all user credentials

### Investor
- Can only view investment proposal
- Cannot access admin dashboard
- Cannot create other users

## Data Storage

**Current Implementation (Development):**
- Users stored in browser `localStorage`
- Session stored in browser `sessionStorage`
- Data persists across page refreshes
- Data is browser-specific

**Production Recommendations:**
- Replace with proper backend API
- Use database (PostgreSQL, MongoDB, etc.)
- Implement proper password hashing (bcrypt)
- Use JWT tokens for authentication
- Add email verification
- Implement password reset functionality
- Add rate limiting
- Use HTTPS only

## Security Notes

⚠️ **Important:** This is a development implementation using browser storage.

**Current Limitations:**
- Passwords stored in plain text
- No encryption
- Client-side only validation
- No email verification
- No password reset

**For Production:**
1. Set up a backend API (Node.js, Python, etc.)
2. Use a proper database
3. Hash passwords with bcrypt or argon2
4. Implement JWT or session-based auth
5. Add HTTPS/SSL
6. Add rate limiting
7. Add email verification
8. Add 2FA (optional)
9. Add audit logging

## File Structure

```
binti-website/
├── lib/
│   └── auth.ts                    # Authentication functions
├── contexts/
│   └── AuthContext.tsx            # Auth state management
├── app/
│   ├── layout.tsx                 # Wrapped with AuthProvider
│   ├── admin/
│   │   ├── login/
│   │   │   └── page.tsx          # Admin login page
│   │   └── dashboard/
│   │       └── page.tsx          # Admin dashboard
│   └── investors/
│       └── proposal/
│           └── page.tsx          # Protected pitch deck
└── components/
    └── InvestmentLogin.tsx       # Investor login modal
```

## Common Tasks

### Add a New Investor
1. Login to admin dashboard
2. Click "Add New Investor"
3. Fill in details
4. Share credentials with investor

### Reset Admin Password
Edit `lib/auth.ts` and change the `DEFAULT_ADMIN` password, then clear browser localStorage.

### View All Investors
Login to admin dashboard - all investors are listed in the table with their credentials.

### Remove an Investor
Click the trash icon next to their name in the admin dashboard.

## Troubleshooting

**Can't login as admin:**
- Clear browser localStorage and sessionStorage
- Refresh the page
- Try default credentials again

**Investor can't access proposal:**
- Verify credentials in admin dashboard
- Check that account exists
- Try logging out and back in

**Changes not saving:**
- Check browser console for errors
- Ensure localStorage is enabled
- Try different browser

## URLs

- **Admin Login:** `/admin/login`
- **Admin Dashboard:** `/admin/dashboard`
- **Investor Login:** `/about/story` (scroll to bottom)
- **Investment Proposal:** `/investors/proposal` (protected)
