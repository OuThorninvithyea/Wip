# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS website prototype for WIP (wip.co clone/inspired project). No build tools, frameworks, or package manager — files are served directly as static assets.

## Development

Open `index.html` directly in a browser or use any static file server:

```bash
# Example with Python
python3 -m http.server 8000

# Example with npx
npx serve .
```

## Architecture

- `index.html` — Single-page entry point with sidebar navigation layout
- `styles.css` — Global styles and design system using CSS custom properties
- `images/` — Static assets (logo)
- `js/` — JavaScript (currently empty, reserved for future use)

## Design System

All design tokens are defined as CSS variables in `:root` within `styles.css`:

- **Colors**: Primary yellow `#FADC00`, accent `#FFF6DB`, background `#E5E5E5`, text `#000000`
- **Typography**: System font stack (`ui-sans-serif, system-ui, sans-serif`)
- **Spacing**: 4px base unit (`--spacing-unit`)
- **Components**: `.btn-primary` (pill-shaped white button), transparent inputs with no border radius
- **Utilities**: `.bg-primary`, `.bg-accent`, `.bg-background`, `.text-primary`

Use the existing CSS variables (e.g., `var(--color-primary)`) rather than hardcoding color values.
