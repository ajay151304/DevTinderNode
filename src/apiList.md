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
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

- userRouter
- GET /user/connections
- GET /user/requests/received
- GET /user/feed-gets you the profiles of other users on platform

Status: ignore , interested, accpeted, rejected
