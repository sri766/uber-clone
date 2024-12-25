# Uber Clone Backend

## API Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object with the following properties:
- `fullname`: An object containing the user's first name and last name.
  - `firstname`: A string with at least 3 characters (required).
  - `lastname`: A string (optional).
- `email`: A string containing a valid email address (required).
- `password`: A string with at least 6 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **201 Created**
  - **Description**: User successfully registered.
  - **Body**: A JSON object containing the user details and authentication token.
  - **Example**:
    ```json
    {
      "user": {
        "_id": "60c72b2f9b1d4c1f8c8b4567",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.