# Architecture Decision Record — Food Delivery

## ADR-001: Modular Monolith with Event-Driven Architecture

### Status

Accepted

### Context

We need to build a production-oriented Food Delivery backend that supports multiple business capabilities, asynchronous workflows, background processing, and maintainable architecture.

We want to learn Event-Driven Architecture without introducing the operational complexity of microservices too early.

### Decision

We will build a modular monolith using TypeScript, Express.js, PostgreSQL, Prisma, Redis and BullMQ.

We will use REST APIs for synchronous communication and event-driven workflows for appropriate asynchronous business processes.

We will initially deploy the application as a modular monolith.

### Architectural Principles

- Business modules must have clear boundaries.
- Modules must not directly access another module's repositories.
- Modules must communicate through explicitly defined interfaces.
- Events must represent business occurrences.
- Event processing must support retries and idempotency.
- Critical events must not be lost.
- Database consistency must be considered in every workflow.
- We will implement the Transactional Outbox pattern where appropriate.
- We will design observability into our event workflows.

### Consequences

#### Benefits

- Simpler deployment.
- Easier development.
- Clear modular boundaries.
- Reduced direct coupling.
- Independent background processing.
- Easier future service extraction.

#### Tradeoffs

- Eventual consistency.
- Event duplication.
- More complex debugging.
- Background infrastructure management.
- Event contract management.
- Failure handling and recovery complexity.

### Future Consideration

Extract individual modules into independent services only when justified by scalability, organizational or business requirements.
