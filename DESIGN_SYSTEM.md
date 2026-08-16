# Luminous Learning design system

## Character

The visual language is intelligent, optimistic and human. Bright colour identifies meaning and progress; it does not sit behind long paragraphs or compete with the content.

## Colour roles

- Midnight Indigo anchors navigation, high-trust statements and selected dark surfaces.
- Luminous Blue is the primary action colour.
- Living Teal indicates progress, support and constructive outcomes.
- Solar Amber marks important moments and provides the keyboard-focus ring.
- Mint, Lemon and Lilac are limited to calm category or learning-stage surfaces.
- Porcelain and White carry most reading content.
- Deep Ink is the default text colour.

Colour names are not used directly by components when a semantic role exists. This allows later contrast adjustments without rewriting component styles.

## Typography

The initial system uses high-quality operating-system fonts to avoid external requests, layout shift and unnecessary font payloads. Display text uses a variable UI display stack; body copy uses a highly readable UI text stack.

- Body copy starts at 17px on larger screens and 16px on compact screens.
- Paragraph line height is 1.68.
- Headings use fluid `clamp()` sizing and remain restrained on mobile.
- Editorial reading width is capped at 43rem.
- Labels use uppercase text only for short eyebrows, never for paragraphs.

## Accessibility rules

- Deep text is used on all pale surfaces.
- White text is reserved for dark, verified surfaces.
- The global focus indicator is a thick Solar Amber outline with spacing from the control.
- Interactive targets have a minimum height of 52px where the shared button primitive is used.
- Reduced-motion preferences remove transitions and animation.
- Increased-contrast preferences strengthen borders and secondary text.
- Meaning must never depend on colour alone.

## Layout rules

- Maximum content width: 74rem.
- Reading width: 43rem.
- Responsive page gutters: 16px on compact screens and 32px above them.
- Section spacing scales from 72px to 128px.
- White space carries hierarchy; decoration must not fill every gap.

## Component foundations

The system currently provides:

- Container and section primitives
- Eyebrow and lead-copy styles
- Primary and secondary action buttons
- Light and dark surfaces
- Success and error status treatments
- Flow, cluster, reading-width and visually-hidden utilities

These are foundations rather than finished page components. Navigation, footer and page-specific patterns belong to later controlled phases.
