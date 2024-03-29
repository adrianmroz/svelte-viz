# Primitives for Data visualisation in Svelte

### Very Work in progress

### Roadmap

* ~~`ColumnFrame` and `GridFrame`~~
* Implement as many non-geo viz from Data Viz Handbook as possible
* Operators for `Scene` (`split`, `inset`, `stack` ... ) 
* `ResponsiveScene` should handle `left` / `right` / `top` / `bottom` props
* ~~Clean up handling context in `Scene` components (Wrapper ?)~~
* ~~Fix types for `deepMap`~~
* Implement some very basic Guides
* `AnimatedFrame`s where values are represented as `spring`s
* `Frame` for layouts like Marimeko or Treemap
* Explore `selection` ideas from vega 

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```
