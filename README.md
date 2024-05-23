
# API Requests


----------------------------------------------------------------------------------

### Student 

###### 1. Login
http://localhost:3000/api/student/account/login
`POST`
```json
{
    "username":"student",
    "password":"123"
}
```

###### 2. Register (*To be used one time only*)
http://localhost:3000/api/student/account/register
`POST`
```json
{
    "username":"Student",
    "email":"student@gmail.com",
    "password":"123",
    "phone":1234567890
}
```

###### 3. Student Profile Fetch
http://localhost:3000/api/student/profile
`POST`
```json
{
    "username":"Student"
}
```

###### 4. Student Documents Fetch
http://localhost:3000/api/student/document
`POST`
```json
{
    "username":"Student"
}
```

----------------------------------------------------------------------------------

### Root

###### 1. Fetch all Countries(Country)
http://localhost:3000/api/root/fetch/country
`GET` | `POST`
```json
{
    "country_name":"India"
}
```

###### 2. Fetch all Universities(University)
http://localhost:3000/api/root/fetch/university
`GET` | `POST`
```json
{
    "university_name":"Mumbai University"
}
```

###### 3. Fetch all Universities Courses(Course)
http://localhost:3000/api/root/fetch/course
`GET` | `POST`
```json
{
    "course_name":"Bsc IT"
}
```

----------------------------------------------------------------------------------

### Application

###### 1. View Student Side
http://localhost:3000/api/application/student
```json
{
    "username": "Student"
}
```


###### 4. Add a Student Application
http://localhost:3000/api/application/apply
```json
{
    "course_id": "xxxx",
    "student_id": "xxxx",
    "app_status": "Pending"
}
```