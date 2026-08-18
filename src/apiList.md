#DevTinder APIs

- authRouter->related to below 3 apis
- POST /signup
- POST /login
- POST /logout

- profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password // Forgot password API

- connectionRequestRouter
- POST /request/send/:status/:userId (status: ignored or interested)
- POST /request/review/:status/:requestId (status- accepted or rejected)

- userRouter
- GET /user/requests/received
- GET /user/connections
- GET /user/feed-gets you the profiles of other users on platform

Status: ignore , interested, accpeted, rejected
