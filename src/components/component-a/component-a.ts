export default async function ComponentA() {
  console.log('Component A');

  const ComponentB = await import(
    /* webpackChunkName: "ComponentB" */
    /* webpackPrefetch: true */
    '../component-b'
  );

  ComponentB.default();

  const ComponentC = await import(
    /* webpackChunkName: "ComponentC" */
    /* webpackPrefetch: true */
    '../reusable/component-c'
  );

  ComponentC.default();
}