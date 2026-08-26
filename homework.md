- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- create a server
- listen to port 7777
- Write request handlers for /test, /hello
- Install Nodemon
- Update Script inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference b/w Caret and Tilde (^ vs ~)

- Initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and extensions ex. /hello, /hello/2, /hello/xyz
- Order of the routes matter a lot
- Install Postman app and make a workspace /collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE API calls and tst them on POSTMAN
- Explore routing and use of ?, +, (), \* in the routes
- Use of regex in routes /a/, /.\*fly$/
- Reading the query Params in the routes
- Reading the Dynamic routes

- Multiple Route Handlers- Play with the code
- next()
- next function and errors along with res.send()
- app.use("/user",rH1, rH2, rH3,rH4,rH5)

- What is middleware ? why do we need it ?
- How express JS basically handles requests behind the scenes

- Difference app.use() and app.all()
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login

- Error Handling using a app.use("/", (err, req, res, next)=>{});

- Create a free cluster on mongodb official website(mongodb Atlas)
- install mongoose library
- Connect your Application to the Database (not cluster) <ConnectionURL>/DevTinderNode

- Call the connectDB func and connect to database before starting application on port 7777

- Create a userSchema & user Model
- Create POST /signup API to add data to database
- Push some documents using API calls from postman
  -Error Handling using try & catch
- JS object vs JSON difference

- Add the express.json() middleware to your app
- Make your signup API dynamic to receive data from the end user (browser, postman etc)

- User.findOne with duplicate emailId, which object will returned - The OldestOne
- API- Get user by emailId
- API- Get/feed - get all the users from the DB
- API - Get user by id
- Create a Delete user API
- Difference b/w PATCH and PUT

- API - update a user
- Explore the Mongoose Documentation for Model API methods

- What are the options in a Model.findOneAndUpdate method, explore more about it
- API - Update the user with email Id

- Explore schematype options from the documentation
- add required, unique, lowercase, min, minLenght, trim
- Add default
- Create a customv alidate function for gender - Imporve the DB schema - PUT all appropriate validations on each field in Schema
- Add timestamps to the userSchema

- Add API Level Validation on Patch request & Signup post API

- Data Sanitizing- Add API validations for each fields
- Install validator
- Explore validator Library func and use validator func for email password ... etc

- NEVER TRUST req.body

-
- Validate data in signup API using 1. validation of the data 2. Encrypt the password 3. Create a new instance of the User Model

- install bcrypt package
- Create a passwordHash using bcrypt.hash(myPlainText, saltRound) and save the user with encrypted password

- Create login API
- Compare passwords and throw new errors if mail or password is invalid

- Install cookie-parser
- just send a dummy cookie to user
- create GET /profile API and check if you get the cookie back
- Install jsonwebtoken
- In login API, after email and password validation, create a JWT token and send it to user in cookies
- read the cookie in your profile API and find the logged in user

- userAuth Middleware
- Add the userAuth middleware in profile API and new sendConnectionRequest
- Set the Expiry of JWT Token and Cookies for 7 days

- Create userSchema method to getJWT()
- Create userSchema method to comparePassword(passwordInputByUser)

- Explore tinder APIs
- Create a list of all API you can think of in Dev Tinder
- Group multiple routes under respective routers
- Read documentation for express.Router()
- Create routes folder for managing auth, profile, request routers
- Create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit API
- Create PATCH /profile/password API - Forgot password API
- Make sure you validate all data in every POST, PATCH

- Create a connectionRequestSchema
- Send connection request API
- Proper validation of data
- Think about all corner cases and handle them
- $or query $and query in mongoose
- schema.pre("save") function

- Read more about indexs in MongoDB
- Why do we need index in DB?
- What is the advantages and disadvantages of create indexs?
- Read this article about compound indexs: https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/
- ALWAYS THINK ABOUT CORNER CASES

- Write code with proper validations for /request/review/:status/:requestId API
- Thought Process - POST vs GET API

- Read about ref and populate for bulding relations b/w the collections https://mongoosejs.com/docs/populate.html

- Create GET/user/request/received with all the checks
- Create GET/user/connections

- Logic for GET/feed API
- Explore the $nin, $and, $eq,$ne and other queries operators

NOTES:

- Pagination:
- /feed?page=1&limit=10 =>first 10 users(1-10) =?.skip(0) & .limit(10)
- /feed?page=2&limit=10 => user(11-20)=>.skip(10) & .limit(10)
- /feed?page=3&limit=10 => user(21-30)=>.skip(20) & .limit(10)
- /feed?page=4&limit=10 => user(31-40)
  // .skip() & .limit()

# Deployement

- Signup on AWS
  - Launch instance
  - chmod 400 "devTinder-security.pem" (macOs or Ubuntu ) -use this -icacls "devTinder-security.pem" /inheritance:r and icacls "devTinder-security.pem" /grant:r "$($env:USERNAME):(R)"
  - ssh -i "devTinder-security.pem" ubuntu@ec2-13-60-203-115.eu-north-1.compute.amazonaws.com
  - nvm install 25.4.0 (your project node version)
  - git clone your both front and backend in the EC2 machine from github
  - - # FrontEnd Deployment
    - cd devTinder-web
    - npm install (install the dependency)
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html
    - sudo scp -r dist/\* /var/www/html
    - Enable port :80 on your instance
  - - # BackEnd Deployment
    - cd devTinderNode
    - npm install
    - allowed EC2 instance public IP on mongodb server
    - installed: npm install pm2 -g
    - pm2 start npm -- start
    - pm2 start npm --name "devTinder-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush <name:npm>, pm2 stop <name>, pm2 delete <name>
    -

FrontEnd = http://13.62.55.3/
Backend = http://13.62.55.3:7777/

Domain name= devtinder.com =>http://13.62.55.3

FrontEnd = devtinder.com
Backend = devtinder.com:7777

-config nginx - sudo nano /etc/nginx/sites-available/default

# Nginx Configuration Edit

server_name 13.62.55.3;
location /api/ {

- proxy_pass http://localhost:7777/;
- proxy_http_version 1.1;
- proxy_set_header Host $host;
- proxy_set_header X-Real-IP $remote_addr;
- proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
- proxy_set_header X-Forwarded-Proto $scheme;
- proxy_set_header Cookie $http_cookie;
- proxy_pass_header Set-Cookie;
  }
  - restart nginx - sudo systemctl restart nginx
- modify the BASE_URL in frontEnd project to "/api"

# Razorpay Paymemt Gateway Integration

- Signup on Razorpay & complete KYC
- Created a UI for premium page
- Creating an API for createOrder in backend
