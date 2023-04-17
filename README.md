Used xmysql to generate API for a simple MySQL database

Steps:
I created a basic NodeJS server (see index.js) and then confirgured the server to connect to a local MySQL database on startup.
I then created a MySQL server on localhost with user root/root and designed two tables for Customers with a primary key, name, and balance, and a table for Products with a primary key, description, and price. I tested this MySQL database with some queries.
I then tested my NodeJS connection by querying for all customer data and sending the JSON to localhost:3000/
When I determined my server was connected to the database and able to make queries, I ran xmysql with the following command:
> xmysql -h localhost -u root -p root -d mydb
This command generated a REST API that I was able to use immediately by connecting to URLs such as localhost:3000/api/customers/count and localhost:3000/customers/describe
Thus xmysql successfully generated an API for my MySQL database on my NodeJS server!