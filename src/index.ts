export type MobiusEventName =
  | "RequestReceived"
  | "IntentClassified"
  | "MemoryLookupCompleted"
  | "RouteSelected"
  | "ProviderExecuted"
  | "MemoryEventCreated"
  | "PulseMetricRecorded"
  | "McmsAuditRecorded"
  | "DashboardRefreshRequested";

export interface MobiusEvent<TPayload = unknown> {
  id: string;
  name: MobiusEventName;
  version: string;
  timestamp: string;
  source: string;
  organizationId: string;
  payload: TPayload;
  correlationId?: string;
}

export type EventHandler<TPayload = unknown> = (event: MobiusEvent<TPayload>) => void | Promise<void>;

const handlers = new Map<string, EventHandler[]>();

export function createEvent<TPayload>(input: Omit<MobiusEvent<TPayload>, "id" | "timestamp" | "version">): MobiusEvent<TPayload> {
  return {
    id: "evt-" + Date.now() + "-" + Math.random().toString(36).slice(2),
    timestamp: new Date().toISOString(),
    version: "1.0",
    ...input
  };
}

export function subscribe<TPayload>(name: MobiusEventName, handler: EventHandler<TPayload>): void {
  const existing = handlers.get(name) ?? [];
  existing.push(handler as EventHandler);
  handlers.set(name, existing);
}

export async function publish<TPayload>(event: MobiusEvent<TPayload>): Promise<void> {
  const eventHandlers = handlers.get(event.name) ?? [];
  await Promise.all(eventHandlers.map((handler) => handler(event)));
}
