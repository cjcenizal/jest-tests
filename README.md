# Jest testing

## What is it?

https://facebook.github.io/jest/

Super-fast unit test framework for React. It's fast because instead of creating a browser environment, it just uses React's virtual DOM.

https://github.com/airbnb/enzyme

We use a library of helpers called Enzyme, provided by Airbnb.

## Where are we using it?

Kibana, X-Pack, EUI, and Cloud, to name a few. As we convert our code to use React we'll eventually get to a point where 100% of our unit tests are run by Jest.

## How do we use it?

We have a Button component that needs testing.

1. Look at it in browser
2. Run Jest -- no tests found
3. Create one! Convention: `*.test.js` next to component.
4. Write a test -- API is similar to Mocha or Jasmine

Snapshots are great at quickly verifying that a component will render and behave the way you want it to. They're a proxy for how the component looks and behaves in the browser.

Doesn’t guard against CSS regressions.

Doesn't test whether a component is accessible except to verify the presene of attributes, e.g. `aria-label`.

###  Props coverage

Let's test the rest of our props.

1. Add test for disabled prop, verify that snapshot looks correct
2. We can test behavior and interaction by simulating events. Test onClick with sinon and simulate.

## How do we use snapshots when changing code?

1. Change implementation of Button by adding a span for an icon.
2. Add test for icon.
3. Run tests. See diff. Realize we need a condition for the case when there is no icon.
4. Or, if that's the change you intended, update the snapshot.

## Enzyme: shallow, render, mount

1. Create ButtonGroup component.
2. Run tests. Look at snapshot. It's noisy.
3. Use shallow to simplify snapshot.

Render gives you the full snapshot, but you can't interact with DOM APIs or simulate interaction.

Use mount when your component needs to interact with the DOM APIs (e.g. requestAnimationFrame).

## EUI test helpers

* Test helpers (https://github.com/elastic/eui/tree/master/src/test)
* Test guidelines (https://github.com/elastic/eui/blob/master/wiki/testing.md)

## Complex UI

More complex components can yield too much noise in the snapshot (parts you don’t care about).

* Shallow rendering, like with ButtonGroup example
* Assertions against parts (finding test subject selectors)
* Mocks

## Code coverage report

Useful for seeing which parts of your code your tests don't cover.

## Mocha replacement

Can just do non-React tests too. It's easy to convert existing mocha unit tests for plain JS to use Jest.

## Testing with Redux

When testing Redux containers you need to mock or otherwise provide the store (https://github.com/elastic/kibana/blob/master/src/core_plugins/kibana/public/dashboard/panel/dashboard_panel_container.test.js).
