# BoxClaude Landing Page Architecture

## Layout Structure

```
#app (width: 100%)
  nav.navbar  (sticky, top: 0, width: 100%)
    .nav-inner  (max-width: 1120px, centered)
  section#hero
  section#problem
  section#solution
  section#features
  section (cta)
  footer
```

All `nav`, `section`, `footer` are `width: 100%`. Inner content uses `.section-inner` with `max-width: 1120px; margin: 0 auto`.

## Responsive Breakpoint

Single breakpoint at `800px`:
- Sections: `padding 100px 32px` → `72px 20px`
- Grid layouts collapse to single column

## SolutionSection Layout

Desktop: `grid-template-columns: 1fr clamp(280px, 33%, 380px)` — image left, text right in grid flow (not absolute).

Mobile (<800px): single column, slides use `height: 0 / height: auto` to show only active slide (carousel override).

## Nav

`position: sticky; top: 0` — scrolls with page until top, then sticks. No offset padding needed in hero.
