# API and Event Bus

## Mission

Connect Mobius API to Mobius Event Bus so requests produce platform events.

## Flow

POST requests -> RequestReceived -> subscribers process request

## Events

- RequestReceived
- IntentClassified
- MemoryLookupCompleted
- RouteSelected
- ProviderExecuted
- MemoryEventCreated
- PulseMetricRecorded
- DashboardRefreshRequested

## Acceptance

- API accepts a request.
- Event Bus publishes RequestReceived.
- Event includes organizationId, source, timestamp, payload, and correlationId.
- Services can subscribe to events.
