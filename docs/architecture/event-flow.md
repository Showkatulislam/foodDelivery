# Food Delivery Event Flow

## Workflow: Customer Places Order

### 1. Request

Customer sends a POST request to create an order.

### 2. Validation

Order module validates restaurant availability, menu items, pricing and delivery information.

### 3. Persistence

Order is persisted in PostgreSQL.

### 4. Event

OrderPlaced event is recorded as part of the reliable order-creation workflow.

### 5. Event Publication

Event publishing infrastructure delivers the event for processing.

### 6. Consumers

- Payment workflow
- Restaurant notification workflow
- Customer notification workflow
- Delivery workflow

### 7. Failure Handling

- Retry failed processing.
- Avoid duplicate processing.
- Log processing failures.
- Track event processing.
- Recover failed jobs.

### 8. Consistency

Order, payment and delivery states are managed independently according to their respective business rules.
