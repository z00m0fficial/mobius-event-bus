# Blueprint Event Contract

## Role
Mobius Event Bus distributes blueprint construction events between Discovery, Memory, Atlas DNA, Pulse, and Command Center.

## Event Names
- blueprint.conversation_analyzed
- blueprint.genome_selected
- blueprint.departments_generated
- blueprint.memories_assembled
- blueprint.risks_classified
- blueprint.recommendations_generated
- blueprint.dna_snapshot_prepared
- blueprint.completed

## RC-1 Scope
Events are represented locally in Command Center construction feed. Production implementation should publish these events through this repository.
