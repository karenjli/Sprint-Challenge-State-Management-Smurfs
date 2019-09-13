1. What problem does the context API help solve?
   Context API allows child component to access data and functions in a parent component without props drilling. Instead a context component is created and it is then passed to child component to give access to the parent component.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   `actions` is, most of the time, an object that houses the instruction for the action. It will include the type of action and the payload.
   `reducers` is the place where the logic is written out. It is also the place where changes to state actually happens.
   `store` is the container that holds the reducer as well as all the states which allows the view to access it for rendering data on the page.
   Store is known as a "single source of truth" because that is the place where components would pull data from and send data to.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   The main difference between Application state and Component state is that Application state is global and component state is local. If some data needs to be access by multiple components, then it is better to use Application state. If some data access is only needed in one component, then it is simpler to use Component state.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   `Redux-thunk` is a middleware that allows an action creator to return a function instead of an action object. It gives action-creators access to the dispatch method so that it can run synchronous action inside the body of the function after the asynchoronous operations are completed.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   I think it all depends on my application. If I have an application that has very little data, then Context API seems to be the simplest. If I have a bigger App that requires multiple reducers, then Redux will be better.
