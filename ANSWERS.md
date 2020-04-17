- [ ] Why would you use class component over function components (removing hooks from the question)?

a) Prior to hooks, functional components could not natively make use of state. Function components were more geared for rendering output and stateful class components had logic that could update an application onscreen.

b) Functional components also couldn't use lifecycle methods, because they were extended from React.Component.

- [ ] Name three lifecycle methods and their purposes.

constructor()
Initializes local state in a class component (this.state)
Binds event handler methods to an instance (this.handleClick)

componentDidMount()
After elements on a page are rendered, this method provides a time during which updates from state (including API calls) can be rendered onscreen

componentDidUpdate()
After a component updates, functions called here can run, generally to re-render a page based on updated state.

- [ ] What is the purpose of a custom hook?

Allows the creation of reusable logic that can be shared between multiple components. Its more DRY and simplifies code for the components that use them by removing duplicate logic.

- [ ] Why is it important to test our apps?

Testing reduces the risk of allowing bugs to make their way into production code. It also helps programmers to write stronger, more testable code, which helps with refactoring, documentation and puzzling out edge cases.