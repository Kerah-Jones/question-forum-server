# Question Quest Server
Question Quest is a question forum where users can asking any question they like in the avaliable categories. Question Quest promotes user experience by allowing users
to create, update, edit, and delete questions. Features of answering questions in the forum is coming soon.

# Links

### Deployed Client Site
https://kerah-jones.github.io/question-forum/

### Front-End Respository
https://github.com/kerah-jones/question-forum-client

### Deployed API

# Planning
First I worked on the user stories, and how i wanted the users to experience while using the application.
Then I worked on wireframes and the layout of what I wanted my application to look like to the user.
Next I created the Entity Relationship Diagram(ERD) in which I mapped out my models which consited of users,
questions, andswers (front-end in developing process). I used problem solving capabilities to debug and solve problems.

# User Stories
1. User is able to create questions
2. User can update
3. User can delete
4. User can view their own questions and others

# Technologies Used

- Express.js
- Node.js
- Axios
- MongoDB
- Mongoose

# Entity Relationship Diagram(ERD)
![Screen Shot 2020-08-12 at 12 42 50 AM](https://media.git.generalassemb.ly/user/28264/files/3d1ee100-dc36-11ea-813f-cbd24056d052)

## API End Points
| Verb   | URI Pattern               | Controller#Action |
|--------|---------------------------|-------------------|
| POST   | `/sign-up`                | `users#signup`    |
| POST   | `/sign-in`                | `users#signin`    |
| DELETE | `/sign-out`               | `users#signout`   |
| PATCH  | `/change-password`        | `users#changepw`  |
| GET    | `/questions`              | `questions#index`  |
| DELETE | `/questions/:id`          | `orders#destroy`  |
| POST   | `/questions`              | `orders#create`   |
| PATCH  | `/questions/:id`          | `orders#update`   |

### signup
The `create` action expects a *POST* of `credentials` identifying a new user to create, e.g.:
```json
{
  "credentials": {
    "email": "an@example.email",
    "password": "an example password",
    "password_confirmation": "an example password"
  }
}
```
If the request is successful, the response will have an HTTP Status of 201,
Created, and the body will be JSON containing the `id` and `email` of the new
user, e.g.:
```json
{
  "user": {
    "_id":"an example id",
    "email":"an@example.com",
    "orders":[],
    "createdAt":"an example date",
    "updatedAt":"an example date",
    "__v":0
  }
}
```
If the request is unsuccessful, the response will have an HTTP Status of 400 Bad
Request, and the response body will be empty.
### signin
The `signin` action expects a *POST* with `credentials` identifying a previously registered user, e.g.:
```json
{
  "credentials": {
    "email": "an@example.email",
    "password": "an example password"
  }
}
```
If the request is successful, the response will have an HTTP Status of 200 OK,
and the body will be JSON containing the user's `id`, `email`, and the `token`
used to authenticate other requests, e.g.:
```json
{
  "user":{
    "_id":"an example id",
    "email":"an@example.com",
    "orders":[],
    "createdAt":"an example date",
    "updatedAt":"an example date",
    "__v":0,
    "token":"<token>"
  }
}
```
If the request is unsuccessful, the response will have an HTTP Status of 401
Unauthorized, and the response body will include the error.
### signout
The `signout` action expects a *DELETE* request and must include the user's
token, but no data is necessary to be sent.
If the request is successful the response will have an HTTP status of 204 No
Content.
If the request is unsuccessful, the response will have a status of 401
Unauthorized.
### changepw
The `changepw` action expects a PATCH of `passwords` specifying the `old` and `new`, eg.:
```json
{
  "passwords": {
    "old": "example password",
    "new": "new example password"
  }
}
```
If the request is successful the response will have an HTTP status of 204 No
Content.
If the request is unsuccessful the response will have an HTTP status of 400 Bad Request.

The `sign-out` and `change-password` requests must include a valid HTTP header
`Authorization: Token token=<token>` or they will be rejected with a status of
401 Unauthorized.

## Questions (GET)
### index
The `index` action is a _GET_ that retrieves all of the questions in that are currently stored on the database. The response status will be 200 OK, and the response body will contain JSON containing an array of questions, e.g.:
```json
{
    "question": [
        {
            "_id": "an example question id",
            "question": "why is the sky blue?",
            "description": "want to know the answer",
            "category": "science",
            "createdAt": "an example date",
            "updatedAt": "an example date",
            "__v": 0
        }
    ]
}
```
If the request is unsuccessful, the response will have an HTTP Status of 500 Internal Server Error, and the response body will be JSON describing the errors.


### Create Question (POST)

The `create` action expects a POST with a token of the user. If the request is successful, the response will have an HTTP Status of 201 Created, and the body will contain JSON of the created question.
```json
{
	"questions": [
		{
		"_id": "an example question id",
    "question": "why is the sky blue?",
    "description": "want to know the answer",
    "category": "science",
		"createdAt":"2020-07-21T00:19:47.039Z",
		"updatedAt":"2020-07-21T00:19:47.039Z"
		}
	]
}
```
### Edit Question (PATCH)

This `update` expects a PATCH request with changes to an existing question, with a body formatted as such:

```json
{
  "question": {
    "_id": "an example question id",
    "question": "why is the sky blue?",
    "description": "want to know the answer",
    "category": "science"
  }
}
```
If the request is successful, the response will have an HTTP Status of 201 Created, and the body will contain JSON of the updated question.

```json
{
  "questions": [
    {
      "_id": "an example question id",
      "question": "why is the sky blue?",
      "description": "want to know the answer",
      "category": "science"
      "createdAt": "2020-07-21T00:30:32.527Z",
      "updatedAt": "2020-07-21T00:31:11.421Z"
    }
  ]
}
```
If the request is unseccussful, the response will have an HTTP Status of 400 Bad Request, and the body will be JSON describing the errors.


# Future Developement Plans

- Allow users to answer questions.
- Allow users to response to answer.
- Allow users to view questions while not signed in.

# Installation

### Clone Respository

- Fork and Clone Respository
- run `nodemon server.js` to start server (listening on port 4741)
- Note must have sever running to sent requests to api on the front-end application

### Want to use this as a templete: Create New Respository
1. Download Zip File.
2. Do Not Fork And Clone
3. Click the "Clone or Download" button and select "Download Zip".
4. Move to desired folder and unzip file.
5. Rename the folder to you desired respository name (has to be the same as one on Github)
6. Do one initial commit using git --all
7. Note: This is the only time you should run this command!
8. Commit all of your files with the command git commit.
9. Your commit title should read Initial commit.
10. Install dependencies with npm install.
11. Create a new repository on github.com
12. Name the new repository with the same name used on Step 5.
14. Follow instructions on pushing code on respository set up page on Github account.
13. To begin running sever run `nodemon server.js`
14. Note you can only send requests to the api on front-end if it is already running in terminal, both on localhost:4741. Please see https://github.com/kerah-jones/question-forum-client for instructions.
