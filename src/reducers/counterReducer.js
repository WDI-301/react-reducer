export default function counterReducer(counter, action) {
    console.log(action)
    switch (action.type) {
        case 'Increment':
          return counter+1
        case 'Decrement':
          return counter-1
        case 'Add':
          return counter+action.inputHandler
        case 'Subtract':
          return counter-action.inputHandler
        case 'Divide':
          return counter / action.inputHandler
        case 'Multiply':
          return counter * action.inputHandler
        case 'Power' :
          return counter ** action.inputHandler
        case 'Remainder':
          return counter % action.inputHandler
        case 'Square Root':
          return Math.sqrt(counter)
        case 'RESET':
          return 0
        case 42:
          return 42
        default:
          alert("Not a Math function")
          break;
      }
  }