# Blueprint Event Contract

## Role
Mobius Event Bus distributes Dynamic Organization Blueprint lifecycle events across services and UI subscribers.

## Events
- blueprint.conversation.analyzed
- blueprint.genome.selected
- blueprint.departments.generated
- blueprint.memories.assembled
- blueprint.risks.classified
- blueprint.recommendations.generated
- blueprint.dna.snapshot_prepared
- blueprint.completed

## RC-1 Scope
The Command Center demo renders construction feed events locally. Production services will publish these events through this repository.

## Connected Repositories
- mobius-command-center
- mobius-dynamic-organization-builder
- mobius-atlas-dna
- mobius-pulse
