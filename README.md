# React Best Practices

<!-- ## Introduction
One of the principal things to avoid when programming with React is to have to many renders. -->

## [Practices and Recommendations](#practicesrecommendations)
  - [Exports](#exports)
  - [Default Props](#default-props)
  - [React Fragment](#react-fragment)
  - Architecture Structure
  - Cancel Pending Requests
  - Compound Components
  - Lazy Loading
  - SOLID
  - HOC
  - Debounce
  - Custom Hooks

## Anti-Patterns
  - Props Drilling
  - Nested Components
  - Huge components
  - Index as key in the loop
  - Not memoization
  - Use context for global scope

## Practices/Recommendations
### Exports

There are two ways to use Exports in React: **named** and **default**.

When we use _export default_ our component looks like this:
```JS
// Message.jsx
const Message = ({message}) =>{
 return <div className="message">{content}</div>
}

export default Message
```
When we want to import _Message_ in our App we will do that this way.
```js
// App.jsx
import Message from './Message'

const App=()=>{
  return <Message content='Hello folks!' />
}
...
```
Default export has a disadvantage here, and that is that nothing stops you to name your imported component with the name you want, example *GreetingMessage* and this might affects the code readability and testability.

Instead the recommendation is use *named export* because with this approach we are forced to have the same name in te component and in the imports.

Following this approach our component will change to this.
```JS
// Message.jsx

// with arrow functions
const Message = ({message}) =>{
 return <div className="message">{content}</div>
}

export { Message }

// with functions
export function Message ({message}){
 return <div className="message">{content}</div>
}
```

We need to change the import too.

```js
// App.jsx
import { Message } from './Message'

const App=()=>{
  return <Message content='Hello folks!' />
}
...
```
### [Back to top](#react-best-practices)
---

### Default props
You can set your default values to your props using defaultProps.

```js
Message.defaultProps = {
  content:'No content provided.'
}
```
Unfortunately defaultProps is going to be deprecated in React 18.3.0. Check info [here.](https://github.com/chakra-ui/chakra-ui/issues/7057)


The recommendation is to use Javascript default parameters. In the props declaration of the component we set the default value. This way to set default props improves the readability of your code because you know since the declaration of your component what props are optional/required.

```JS
const Message = ({ message="No content provided!" }) =>{
 return <div className="message">{content}</div>
}
```
### [Back to top](#react-best-practices)
---

### React Fragment

[Example](https://codesandbox.io/s/react-fragment-43edci?file=/src/App.js)

### [Back to top](#react-best-practices)
---
