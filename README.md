# BoxClaude

*You've hit your limit?*

**Box your Claude Code to the way you want.**

Stop Claude from running wild across your codebase. Define a scope. Stay in control.

## Why I Built This

I kept hitting the same wall: ask Claude to fix one thing, come back to find it rewrote half the project. Files moved without updated references. Services broken. Silent changes to unrelated APIs. No warning.

The problem isn't Claude — it's that Claude has no idea where *your* boundary is. It roams freely because nothing tells it to stop. BoxClaude fixes that by letting you define exactly what Claude is allowed to see.

## The Solution

| Feature | What it solves |
| ------- | -------------- |
| Right-click any folder → **Set as Claude Box** | Claude is scoped to exactly that folder, nothing more |
| Scope saved to `CLAUDE.local.md` | Gitignored, private, remembered between sessions — no re-explaining every time |
| Add folders or individual files on demand | Scope grows with the task, not the whole project |
| Interactive **dependency graph** | Visualize your codebase, then set your Box from the graph with full context |
| Cyclic dependency detection | Catches architectural loops before Claude gets stuck thrashing |

## Dependency Graph — Supported Languages

The built-in dependency graph understands imports and exports in:

C, C++, C#, CSS, Go, Java, JavaScript, Python, Rust, Swift

## Install

**VS Code Extension** — [Install from VS Marketplace](https://marketplace.visualstudio.com/items?itemName=RockieYang.BoxClaude)

Or search `BoxClaude` in the VS Code Extensions panel.
