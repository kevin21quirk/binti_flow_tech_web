# Database Setup Guide - PostgreSQL with Neon

## Overview
The authentication system now uses PostgreSQL hosted on Neon.tech instead of browser localStorage. All user data, credentials, and authentication information is stored securely in the backend database.

## Database Configuration

### Environment Variables
The database connection string is stored in `.env.local`:
```
DATABASE_URL=postgresql://neondb_owner:npg_Ofz3X5LAdJpt@ep-square-band-abiyvnt7-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,  -- Hashed with bcrypt
  role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'investor')),
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
```

## Automatic Initialization

The database is automatically initialized when the app starts:
1. Creates the `users` table if it doesn't exist
2. Creates the default admin account if not present
3. Sets up necessary indexes

### Default Admin Account
- **Email:** `admin@bintiflowtech.com`
- **Password:** `BintiAdmin2026!`
- **Role:** admin

## API Routes

### Authentication
- **POST** `/api/auth/login` - Login with email and password
- **GET** `/api/auth/init` - Initialize database (called automatically)

### User Management
- **GET** `/api/users` - Get all investor users
- **POST** `/api/users` - Create new investor user
- **DELETE** `/api/users?id={userId}` - Delete user by ID

## Security Features

### Password Hashing
- All passwords are hashed using bcrypt with 10 salt rounds
- Passwords are never stored in plain text
- Passwords are never returned in API responses

### Session Management
- Current user session stored in browser sessionStorage
- Session cleared on logout
- No sensitive data stored in localStorage

### Role-Based Access Control
- **Admin:** Full access to dashboard, user management, and investment proposal
- **Investor:** Access only to investment proposal

## How It Works

### Login Flow
1. User enters email and password
2. Frontend sends POST request to `/api/auth/login`
3. Backend queries database for user by email
4. Backend verifies password using bcrypt
5. If valid, user data (without password) is returned
6. Frontend stores user in sessionStorage and updates auth context

### User Creation Flow
1. Admin enters new user details in dashboard
2. Frontend sends POST request to `/api/users`
3. Backend hashes password with bcrypt
4. Backend inserts new user into database
5. User can now login with their credentials

### User Deletion Flow
1. Admin clicks delete button for a user
2. Frontend sends DELETE request to `/api/users?id={userId}`
3. Backend verifies user is not an admin
4. Backend deletes user from database

## Migration from localStorage

The old `lib/auth.ts` file has been replaced with:
- `lib/auth-api.ts` - Client-side API functions
- `lib/db.ts` - Database connection and initialization
- `app/api/auth/login/route.ts` - Login API endpoint
- `app/api/auth/init/route.ts` - Database initialization endpoint
- `app/api/users/route.ts` - User management endpoints

All components have been updated to use the new API-based authentication.

## Testing

### Test Admin Login
1. Navigate to `/admin/login`
2. Enter: `admin@bintiflowtech.com` / `BintiAdmin2026!`
3. Should redirect to admin dashboard

### Test Creating Investor
1. Login as admin
2. Click "Add New Investor"
3. Enter email, password, and optional name
4. User should appear in the table

### Test Investor Login
1. Navigate to `/investors` (Invest with Us page)
2. Click "Access Investment Proposal"
3. Enter investor credentials
4. Should redirect to pitch deck

## Database Management

### Viewing Data
You can view your data in the Neon console:
1. Go to https://console.neon.tech
2. Select your project
3. Use the SQL Editor to run queries

### Backup
Neon provides automatic backups. You can also export data:
```sql
SELECT * FROM users;
```

### Reset Database
To reset the database (delete all users except admin):
```sql
DELETE FROM users WHERE role = 'investor';
```

## Troubleshooting

### Database Connection Issues
- Check that DATABASE_URL is set in `.env.local`
- Verify the connection string is correct
- Ensure your IP is allowed in Neon (usually automatic)

### Admin Can't Login
- Database may not be initialized
- Navigate to `/api/auth/init` in browser to manually initialize
- Check browser console for errors

### Users Not Appearing
- Check browser console for API errors
- Verify database connection
- Check Neon console for actual data

## Production Considerations

### Current Setup (Development)
✅ Passwords hashed with bcrypt
✅ Database hosted on Neon
✅ API-based authentication
✅ Role-based access control

### Future Enhancements
- Add JWT tokens for stateless authentication
- Implement refresh tokens
- Add email verification
- Add password reset functionality
- Add rate limiting to prevent brute force
- Add audit logging
- Add 2FA (optional)
- Set up proper CORS policies
- Add API authentication middleware

## Files Modified

### New Files
- `.env.local` - Environment variables
- `lib/db.ts` - Database connection
- `lib/auth-api.ts` - API client functions
- `app/api/auth/login/route.ts` - Login endpoint
- `app/api/auth/init/route.ts` - Init endpoint
- `app/api/users/route.ts` - User management endpoints

### Updated Files
- `contexts/AuthContext.tsx` - Uses API instead of localStorage
- `components/InvestmentLogin.tsx` - Uses API for login
- `app/admin/login/page.tsx` - Uses API for login
- `app/admin/dashboard/page.tsx` - Uses API for user management

### Deprecated Files
- `lib/auth.ts` - Replaced by `lib/auth-api.ts` (can be deleted)

## Support

For issues with:
- **Database:** Check Neon console and connection string
- **Authentication:** Check browser console and API responses
- **API Errors:** Check server logs in terminal

All authentication data is now securely stored in your PostgreSQL database on Neon.tech!
