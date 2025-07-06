# TodoFullStack Application

A full-stack Todo management application built with **React** for the frontend, **Spring Boot** for the backend, and **MySQL** as the database. The application includes JWT-based authentication and role-based access control for two types of users: admin and regular users.

---

## Tech Stack

| Layer       | Technology        |
|-------------|-------------------|
| Frontend    | React.js          |
| Styling     | Bootstrap         |
| Backend     | Spring Boot (Java)|
| Database    | MySQL             |
| Authentication | JWT (JSON Web Tokens) |

---

## Features

### Authentication and Authorization
- JWT-based login and signup.
- Role-based access:
  - **Admin** users can:
    - Create new tasks
    - Update existing tasks
    - Delete tasks
    - Mark tasks as complete or incomplete
  - **Regular** users can:
    - Mark tasks as complete or incomplete


### Task Management
- Tasks are stored in a MySQL database.
- Admin can manage all aspects of a task.
- Regular users have restricted interaction limited to task completion status.

