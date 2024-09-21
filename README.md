
# Analog Powertech Engineering Nodejs Task
This is  a complete Nodejs project that contain RESTful API for a ticket management system using Node.js and MongoDB. The API supports basic CRUD operations (Create, Read, Update, Delete) for managing support tickets.



## Installation

How to setup the project with enviornment

#### Step 1: Clone the respositiory
```
  git clone https://github.com/hemant-yadavv/ticket-management-system.git
```

#### Step 2: Install Node Modules
```
  npm install
```

#### Step 3: Create .env file paste the content of .env.sample and add following 
```
PORT = 4000
MONGO_URI = <Enter Your MongoDb Connection URL>
```

#### Step 4: Now start the server by running following command
```
npm run dev
```

#### Step 5: Now you can try diffrent routes either using curl or postman

Complete API documentation on Postman : [Link](https://documenter.getpostman.com/view/37281707/2sAXqtagZa)


## Usage/Examples

1. Create Ticket

```
Req Type: Post
Endpoint: /api/v1/createTicket

Req Body (type/json) :
{
    "title" : "New Ticket"
    "description" : "This is New Ticket"
}

```

2. Get All Ticket

```
Req Type: Get
Endpoint: /api/v1/getTicket
```

3. Get Single Ticket
```
Req Type: Get
Endpoint: /api/v1/getTicket/:ticketID
```

4. Update Ticket
```
Req Type: Put
Endpoint: /api/v1/updateTicket/:ticketID
Req Body (type/json) :
{
    "title" : "Updated Ticket"
    "description" : "This is Updated Ticket",
    "status" : "complete"
}
```

5. Delete Ticket
```
Req Type: Delete
Endpoint: /api/v1/deleteTicket/:ticketID
```

Above is Complete Analog Powertech Engineering Task with Documentation
