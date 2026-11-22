
# Food Delivery Domain Defination

### 1.Project Vision

build a food delivery platform where customers can discover 
restaurants,order food ,pay and receive deliveries


### 2.Actors
- Customer
- Restaurant Owner
- Restaurant Staff
- Delivery Rider
- Administrator

### 3 Business  Capabilities
- User Management
- Restaurant Management
- Menu Management 
- Order Management 
- Payment Management 
- Delivery Management
- Notification Management 
- Promotion Management 

### 4 Core Business Workflow
1. Customer selects a restaurant 
2. Customer selects menu items.
3. Customer places and order 
4. Payment is Processed 
5. Restaurant acccepts or rejects the order
6. Delivery is assigned
7. Rider picks up the order
8. Rider delivers the order
9. Order is Completed.

### 5 Business Rules

- A customer cannot order from an unavailable restaurant 
- Prices must be validated on the server
- An order must preserve the price at the time of purchase 
- An Order must have a valid delivery addresss
- An order musht have a defined lifecycle .
- Payment must be tracked independently from order status

### 6. Initial Architecture 
 Modular Monolith With Event Driven Architecture internally.
 
