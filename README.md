# Mobius Event Bus

Real-time communication backbone for the Mobius Organizational Intelligence Operating System.

## Mission

Connect every Mobius service through event-driven architecture so services can communicate without becoming tightly coupled.

## First Heartbeat Events

- RequestReceived
- IntentClassified
- MemoryLookupCompleted
- RouteSelected
- ProviderExecuted
- MemoryEventCreated
- PulseMetricRecorded
- McmsAuditRecorded
- DashboardRefreshRequested

## Rule

Services communicate through events wherever possible. Direct service calls should be intentional, minimal, and documented.
