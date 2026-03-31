# Fix 404 Error for /user-api/users

## Steps:
- [x] Step 1: Add GET /users endpoint in backend/APIs/UserAPI.js to list all users (public or protected?)
- [x] Step 2: Fix port in frontend/src/useAuth.js from 4000 to 3000
- [x] Step 3: Check and update any frontend fetches to use correct URL (e.g., UserDashboard)
- [x] Step 4: Restart backend server
- [ ] Step 5: Test registration, login, and GET /user-api/users
- [ ] Step 6: Verify no more 404 in browser console
