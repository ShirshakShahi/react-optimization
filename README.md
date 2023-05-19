In this part of section, We deal about ` Optimization Techniques ` in ReactJs.

We use 

`export default React.memo(OurCustomedComponent);`

another one is : 

## useCallback

`useCallback` built in React Hook that takes another function as argument and have deppendencies like that in `useEffect`. Here we should have proper knowledge of `closures` of JavaScript.

 In the context of React, we can say that useCallback remembers a function. The useCallback hook is used to memoize a function so that it is only re-created when its dependencies change.

When you define a function within a functional component, it is recreated every time the component re-renders. This can be inefficient, especially if the function is passed as a prop to child components, as it can trigger unnecessary re-rendering of those components.

By wrapping a function with useCallback, React will memoize the function and only recreate it when the dependencies specified in the dependency array change. This allows you to optimize performance by preventing unnecessary re-creation of functions.

## Closures

`closures` in JavaScript can be understood as a combination of a function and the environment in which it was created. In simpler terms, a closure allows a function to remember and access the variables and parameters that were present in its parent scope when it was defined.