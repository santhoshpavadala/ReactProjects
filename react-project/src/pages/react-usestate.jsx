import { useState } from "react";
import Button from "../components/button";

function ReactUseState() {
  const [count, setCount] = useState(0);
  const [countThree, setCountThree] = useState(0)

  const incrementThreeTimes = () => {
    setCountThree(prev => prev + 1);
    setCountThree(prev => prev + 1);
    setCountThree(prev => prev + 1);
  };

   const [countCheck, setCountCheck] = useState(0);

  const handleClick = () => {
    console.log(countCheck);

    setCountCheck(countCheck + 1);

    console.log(countCheck);
  };


  // Updating the multiple states
  const [name, setName] = useState("Santhosh");
  const [age, setAge] = useState(30);
  const [isActive, setIsActive] = useState(true);

  // Updating Nested Oject state
  const [user, setUser] = useState({
    name: "Santhosh",
    address: {
      city: "Hyderabad",
      country: "India",
    },
  });

  // Update nested object
  const updateCity = () => {
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        city: "Bangalore",
      },
    }));
  };

  // ========================================
  // Array State
  // ========================================

  const [skills, setSkills] = useState(["Angular", "React"]);

  const addSkill = () => {
    setSkills((prevSkills) => [...prevSkills, "JavaScript"]);
  };

  const removeSkill = () => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== "Angular"),
    );
  };

  const updateSkill = () => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) => (skill === "React" ? "React.js" : skill)),
    );
  };



  return (
    <>
      <h2 className="page-title">Section 4 — React useState</h2>
      <h6 className="section-subheading">
        This is one of the most important React interview sections. For your
        experience level, don't just learn how to use useState; you should
        understand why state exists, how updates work, immutability, batching,
        re-rendering, functional updates, objects/arrays, and state
        architecture.
      </h6>
      <div className="section">
        <div className="sub-section">
          <div className="section-body">
            <div className="section-content">
              <h6 className="section-heading">4.1 What is State?</h6>
              <p>
                State is data managed by a React component that can change over
                time and, when updated, can cause the component to render again.
              </p>
              <p>Examples of state:</p>
              <ul>
                <li>Counter value</li>
                <li>Input value</li>
                <li>Selected tab</li>
                <li>Modal open/close</li>
                <li>Loading status</li>
                <li>API response</li>
                <li>Selected user</li>
                <li>Filters</li>
                <li>Pagination</li>
                <li>Form data</li>
              </ul>

              <h4 className="section-heading">4.4 Basic useState Example</h4>
              <p>Example:</p>
              <h2>{count}</h2>
              <Button varient="primary" onClick={() => setCount(count + 1)}>
                Increment
              </Button>

                

              <h6 className="section-subheading">Q: What is State?</h6>
              <p>
                State is component-managed data that represents information that
                can change over time. Updating state schedules a React update so
                the UI can reflect the new state.
              </p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">4.2 Why Do We Need State?</h4>
              <p>Consider this:</p>
              <pre>
                <code>
                  {`
                        function Counter() {
                            let count = 0;

                            const increment = () => {
                                count++;
                            };

                            return (
                                <button onClick={increment}>
                                {count}
                                </button>
                            );
                            }

                            Changing count like this doesn't tell React that it needs to update the UI.

                            Instead:

                            const [count, setCount] = useState(0);

                            React knows that setCount() represents a state update.
                            setCount(count + 1);

                            Conceptually:

                            User clicks
                                ↓
                            setCount()
                                ↓
                            React schedules update
                                ↓
                            Component renders again
                                ↓
                            UI reflects new state
                        `}
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">4.3 What is useState?</h4>
              <p>
                useState is a React Hook that allows a function component to
                declare and manage state.
              </p>
              <h6 className="section-subheading">Syntax:</h6>
              <p>const [state, setState] = useState(initialValue);</p>
              <h6 className="section-subheading">Example:</h6>
              <p>const [count, setCount] = useState(0);</p>
              <p>
                Here: count = Current state, setCount = Function used to update
                the state, 0 = Initial state
              </p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                4.5 What Happens When State Changes?
              </h4>
              <p>This is a very important interview topic.</p>
              <p>const [count, setCount] = useState(0);</p>
              <p>Then: setCount(1);</p>
              <p>The general flow is:</p>
              <pre>
                <code>
                  {`
                        setCount(1)
                            ↓
                        React schedules state update
                            ↓
                        Component renders again
                            ↓
                        New UI result is produced
                            ↓
                        React reconciles old/new results
                            ↓
                        Required DOM changes are committed
                        `}
                </code>
              </pre>

              <div>
                <p>
                  Interview Answer: When a state setter is called, React
                  schedules an update. The component may render again using the
                  new state, React reconciles the resulting UI with the previous
                  one, and commits the necessary changes.
                </p>
              </div>
            </div>

            <div className="section-content">
              <h4 className="section-heading">4.6 State vs Props</h4>
              <p>This is one of the most common interview questions.</p>

              <pre>
                <code>
                  {`
| Props                          | State                                           |
| ------------------------------ | ----------------------------------------------- |
| Passed to component            | Managed by component/application logic          |
| Read-only input                | Can change                                      |
| Parent → child                 | Internal/reactive data                          |
| Used for communication         | Used for changing application/UI state          |
| Component doesn't own the prop | State is owned by the component that manages it |


function User({ name }) {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <>
      <h2>{name}</h2>

      <p>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}

Here:
name      → Props
isOnline  → State
                        `}
                </code>
              </pre>
              <p>
                Interview Answer: Props are read-only inputs passed into a
                component, while state is data managed by the component or
                application that can change over time.
              </p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                4.7 State Can Hold Different Data Types
              </h4>
              <h6 className="section-subheading">String</h6>
              <p>const [name, setName] = useState("");</p>
              <h6 className="section-subheading">Number</h6>
              <p>const [count, setCount] = useState(0);</p>
              <h6 className="section-subheading">Boolean</h6>
              <p>const [isOpen, setIsOpen] = useState(false);</p>
              <h6 className="section-subheading">Array</h6>
              <p>const [users, setUsers] = useState([]);</p>
              <h6 className="section-subheading">Object</h6>
              <pre>
                <code>
                  {`
const [user, setUser] = useState({
    name: "",
    role: ""
});
`}
                  <h6 className="section-subheading">Null</h6>
                  <p>const [selectedUser, setSelectedUser] = useState(null);</p>
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">4.8 Multiple State Variables</h4>
              <p>You can use multiple useState calls.</p>
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
                <p>{isActive ? "Active" : "InActive"}</p>
              </div>
            </div>

            <div className="section-content">
              <h4 className="section-heading">4.9 Updating State</h4>
              <p>Basic update: number: setCount(10)</p>
              <p>Basic update: Boolean: setIsOpen(true);</p>
              <p>Basic update: String: setName("Santhosh");</p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                4.10 State Updates Should Be Treated as Immutable
              </h4>
              <p>Suppose:</p>
              <pre>
                <code>
                  {`
const [user, setUser] = useState({
  name: "Santhosh",
  role: "Frontend Developer"
});

Don't directly mutate:
user.name = "Rahul";

Instead:
setUser({
  ...user,
  name: "Rahul"
});
                        `}
                </code>
              </pre>
              <p>
                Why? <br />
                Because React state should be treated as immutable. Creating a
                new object makes the state transition explicit and works
                correctly with React's update model.
              </p>
            </div>

            <div className="section-content">
              <h4>4.11 Updating Objects in State</h4>
              <p>Initial:</p>
              <pre>
                <code>
                  {`
const [user, setUser] = useState({
  name: "Santhosh",
  age: 30,
  role: "Frontend Developer"
});

Update only name:
setUser({
  ...user,
  name: "Rahul"
});

Result:
{
  name: "Rahul",
  age: 30,
  role: "Frontend Developer"
}

The spread operator preserves the other properties.
                        `}
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">4.12 Updating Nested Objects</h4>
              <pre>
                <code>
                  {`
const [user, setUser] = useState({
  name: "Santhosh",
  address: {
    city: "Hyderabad",
    country: "India"
  }
});

To change city:
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Bangalore"
  }
});

Why two spreads?

Because both levels need to be copied:

user
 └── address
       └── city

We create a new user object and a new address object.
                        `}
                </code>
              </pre>

              {/* Object */}
              <h2>User Details</h2>

              <p>Name: {user.name}</p>
              <p>City: {user.address.city}</p>
              <p>Country: {user.address.country}</p>

              <Button varient="primary" onClick={updateCity}>
                Update City
              </Button>
            </div>

            <div className="section-content">
              <h4 className="section-heading">4.13 Updating Arrays in State</h4>
              <div>
                <h2>My Skills</h2>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>

                {/* =============================== */}
                {/* BUTTONS */}
                {/* =============================== */}

                <div>
                  {/* Add JavaScript */}

                  <Button variant="primary" onClick={addSkill}>
                    Add Skill
                  </Button>

                  {/* Update React */}

                  <Button variant="primary" onClick={updateSkill}>
                    Update React
                  </Button>

                  {/* Remove Angular */}

                  <Button variant="danger" onClick={removeSkill}>
                    Remove Angular
                  </Button>
                </div>
              </div>

              <div className="section-content">
                <h4 className="section-heading">
                  4.14 Never Mutate State Directly
                </h4>
                <p>Avoid: skills.push("JavaScript");</p>
                <p>Then: setSkills(skills); This mutates the existing array.</p>
                <p>Prefer:</p>
                <pre>
                  <code>
                    {`
                            setSkills([
                                ...skills,
                                "JavaScript"
                            ]);                                                                 
                            `}
                  </code>
                </pre>
                <h6 className="section-subheading">
                  Q: Why shouldn't we mutate React state directly?
                </h6>
                <p>
                  React state should be treated as immutable. Direct mutation
                  can lead to incorrect state transitions, make change
                  detection/reconciliation harder to reason about, and cause
                  stale or unexpected UI behavior. We should create a new value
                  and pass it to the state setter.
                </p>
              </div>
            </div>

            <div className="section-content">
                <h4>4.15 Functional State Updates</h4>
                <p>4.15 This is very important. Suppose:</p>
                <p>const [count, setCount] = useState(0);</p>
                <p>ou want to increment based on the previous value.</p>
                <p>You can do: setCount(count + 1);</p>
                <p>But when multiple updates depend on the previous state, prefer the functional form:</p>
                <pre><code>{`setCount(prevCount => prevCount + 1);`}</code></pre>
                <p>Example:</p>

                <h2>{countThree}</h2>
               <Button onClick={incrementThreeTimes}>Count +3</Button>
               <p>The updater functions are applied using the latest queued state.</p>
            </div>

            <div className="section-content">
                <h4 className="section-heading">4.16 Why Functional Updates Are Important</h4>
                <p>Consider:</p>
                <pre>
                    <code>
                        {`
                        setCount(count + 1);
                        setCount(count + 1);
                        setCount(count + 1);
                        `}
                    </code>
                    
                </pre>
                <p>All three expressions can be based on the same count value from the current render.</p>
                <p>Instead:</p>
                <pre>
                    <code>
                        {`
                        setCount(prev => prev + 1);
                        setCount(prev => prev + 1);
                        setCount(prev => prev + 1);

                        Each updater works from the previous queued state.
                        `}
                    </code>
                </pre>
                <p><strong>When the next state depends on the previous state, I prefer the functional updater form because it ensures the update is calculated from the latest queued state.</strong></p>
            </div>

            <div className="section-content">
                <h4 className="section-heading">4.17 Is State Update Synchronous?</h4>
                <p>Be careful with this interview question</p>
                <p>Don't simply answer: "React state is asynchronous.", That's an oversimplification.</p>
                <p>Calling a state setter schedules an update; it does not immediately change the state variable captured by the current render. React may batch updates and process them later.</p>
            
                <p>Example:</p>
                <pre>
                    <code>
                        {`
                        const [count, setCount] = useState(0);
                        setCount(1);
                        console.log(count);
                        `}
                    </code>
                </pre>
                <p>You should not expect the current count variable to immediately become 1.The current render's value remains 0.</p>
            </div>

            <div className="section-content">
                <h4 className="section-heading">4.18 State Is Associated With a Render</h4>
                <p>This is a deeper concept. Suppose:</p>
                <Button variant="primary" onClick={handleClick}>{countCheck}</Button>
                <p>Both logs in that handler can show the value from the current render. <br />
                The state variable doesn't mutate in place. <br />
                React produces a future render with the new state.</p>
                <p>This is important when you start learning:</p>
                <ul>
                    <li>Closures</li>
                    <li>Effects</li>
                    <li>Event Handler</li>
                    <li>Stale State</li>
                </ul>
            </div>
            <div className="section-content">
                <div className="section-heading">4.19 State Batching</div>
                <p>React can batch multiple state updates together to reduce unnecessary rendering.</p>
                <p>Example:</p>
                <pre>
                    <code>
                        {`
                        function handleClick() {
                            setName("Rahul");
                            setAge(31);
                            setActive(true);
                        }
                        `}
                    </code>
                </pre>
                <p>React can process these updates together rather than necessarily performing a separate render after every setter call.</p>
                <p><strong>React batches state updates when appropriate so multiple updates can be processed together, reducing unnecessary rendering work.</strong></p>
            </div>

            <div className="section-content">
                <h4 className="section-heading">4.20 Lazy Initialization</h4>
                <p>Suppose the initial state calculation is expensive.</p>
                <p>Instead of:</p>
                <pre>
                    <code>
                        {`
                        const [data, setData] = useState(
                            expensiveCalculation()
                        );
                        `}
                    </code>
                </pre>
                <p>you can provide an initializer function:</p>
                <pre>
                    <code>
                        {`
                        const [data, setData] = useState(
                            () => expensiveCalculation()
                        );
                        The function is used to calculate the initial state.
                        `}
                    </code>
                </pre>
                <p>Example</p>
                <pre>
                    <code>
                        {`
                        const [users] = useState(() => {
                            return loadUsersFromStorage();
                        });
                        `}
                    </code>
                </pre>
                <h6 className="section-subheading">Q: Why use a function with useState initialization?</h6>
                <p>It allows React to use the initializer function to calculate the initial state instead of evaluating the calculation as a normal expression on every render.</p>
            </div>

            <div className="section-content">
                <h4>4.21 Updating State Based on Previous State</h4>
                <p></p>
                <pre>
                    <code>
                        
                        {`
                        Common example: 
                        setCount(prev => prev + 1);

                        For an array:
                            setUsers(prevUsers => [
                            ...prevUsers,
                            newUser
                        ]);

                        For an object:
                        setUser(prevUser => ({
                            ...prevUser,
                            name: "Rahul"
                        }));
                        This style is particularly useful when the update depends on the previous state.
                        `}
                    </code>
                </pre>
            </div>

                <div className="section-content">
                    <h4 className="section-heading">4.22 Derived State</h4>
                    <p>Derived state is information that can be calculated from existing props or state rather than stored separately.</p>
                    <p>Suppose:</p>
                    <pre>
                        <code>
                            {`
                            const [firstName, setFirstName] = useState(""); <br />
                            const [lastName, setLastName] = useState("");
                            `}
                        </code>
                    </pre>
                    <p>Don't necessarily create:</p>
                    <p>const [fullName, setFullName] = useState("");</p>
                    <p>Instead:</p>
                    {/* <pre>
                        <code>
                            {`
                                const fullName = `${firstName} ${lastName}`;
                            `}
                        </code>
                    </pre> */}
                    <p>Why?</p>
                    <p>Because fullName can be derived from existing state.</p>

                    <h6 className="section-subheading">Q: Should everything be stored in state?</h6>
                    <p>Only data that needs to be independently managed/reactive should be state. Values that can be calculated from existing props/state are often better derived during rendering.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.23 Bad Derived State Example</h4>
                    <p>Avoid unnecessary duplication:</p>
                    <pre>
                        <code>
                            {`
                            const [price, setPrice] = useState(100);
                            const [quantity, setQuantity] = useState(2);
                            const [total, setTotal] = useState(200);

                            Now you must keep:
                            price
                            quantity
                            total

                            synchronized.

                            Instead:
                            const total = price * quantity;
                            Much simpler.
                            `}
                        </code>
                    </pre>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.24 Lifting State Up</h4>
                    <p>Lifting state up means moving shared state to the closest common parent of the components that need it.</p>
                    <p>Example:</p>
                    <pre>
                        <code>
                            {`
Parent
/    \
/      \
Input      Preview
Both need the same value.

Instead of keeping separate states:
Input → state
Preview → state

move the state into Parent:
    Parent
    state
    /    \
    ↓      ↓
Input   Preview

Example:
function Parent() {
const [name, setName] = useState("");

return (
    <>
    <Input
        name={name}
        setName={setName}
    />

    <Preview name={name} />
    </>
);
}

                            `}
                        </code>
                    </pre>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.25 Why Lift State Up?</h4>
                    <p>Because two components need to stay synchronized.</p>
                    <p>Example:</p>
                    <p>SearchBox <br />
                        ↓         <br />
                    searchTerm <br />
                        ↓<br />
                    UserList</p>
                    <p>The search term should be owned by a common parent if both components depend on it.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.26 State Preservation</h4>
                    <p>React generally preserves state when the same component remains in the same position in the rendered tree.</p>
                    <p>Example:</p>
                    <pre>
                        <code>
                            {`
                            {isAdmin ? (
                                <UserForm />
                            ) : (
                                <UserForm />
                            )}
                            `}
                        </code>
                    </pre>
                    <p>The component identity/position can result in state being preserved.</p>
                    <p>State preservation becomes particularly important when rendering different components conditionally.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heding">4.27 Resetting State</h4>
                    <p>Sometimes you intentionally want to reset component state.</p>
                    <p>One common approach is changing the component's key.</p>
                    <pre><code>{`<UserForm key={userId} userId={userId} />`}</code></pre>
                    <p>When the key changes, React treats it as a different component identity and its state is initialized again.</p>
                    <p>Example:</p>
                    <pre>
                        <code>
                            {`
                            <UserForm key={selectedUser.id} />
                            Changing selected user can reset the form state.
                            `}
                        </code>
                    </pre>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.28 State and key</h4>
                    <p>This is an advanced interview topic.</p>
                    <p>Keys aren't only for list rendering.</p>
                    <p>They also help React identify component instances.</p>
                    <pre><code>{`
                    <UserForm key={userId} />
                    Changing: userId = 1

                    to: userId = 2
                    can cause React to treat the component as a new instance, resetting its local state.
                    
                    `}</code></pre>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.29 State with Forms</h4>
                    <p>Example:</p>
                    <pre>
                        <code>
                            {`
                            function LoginForm() {
                            const [email, setEmail] = useState("");
                            const [password, setPassword] = useState("");

                            return (
                                <form>
                                <input
                                    value={email}
                                    onChange={(e) =>
                                    setEmail(e.target.value)
                                    }
                                />

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                    setPassword(e.target.value)
                                    }
                                />
                                </form>
                            );
                            }
                            `}
                        </code>
                    </pre>
                    <p>This is a controlled form. We'll cover forms deeply in Section 5.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.30 State with API Data</h4>
                    <p>This is highly relevant to your React projects.</p>
                    <pre>
                        <code>
                            {`
                            function Users() {
                            const [users, setUsers] = useState([]);
                            const [loading, setLoading] = useState(false);
                            const [error, setError] = useState(null);

                            return 
                                * UI *

                            
                            

                            Here we have three pieces of state:
                            users
                            loading
                            error

                            Typical API flow:

                            Initial
                            users = []
                            loading = false
                            error = null

                                ↓

                            API request

                                ↓

                            loading = true

                                ↓

                            API success

                            users = response
                            loading = false

                                OR

                            API failure

                            error = message
                            loading = false

                            We'll implement this completely in the API Integration section.
                            `}
                        </code>
                    </pre>
                </div>

                <div className="section-content">
                    <h4 className="">4.31 Should All State Be in One Object?</h4>
                    <p>You may see:</p>
                    <pre>
                        <code>
                            {`
                            const [state, setState] = useState({
                                name: "",
                                age: 0,
                                loading: false
                            });
                            This can work.

                            But sometimes separate state variables are clearer:
                            const [name, setName] = useState("");
                            const [age, setAge] = useState(0);
                            const [loading, setLoading] = useState(false);
                            `}
                        </code>
                    </pre>
                    <p>There's no universal rule.</p>
                    <p>Use state structure that makes related updates and component logic clear.</p>
                    <p>For complex state transitions, useReducer can be a better fit. We'll cover that later.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.32 State vs Local Variable</h4>
                    <p>This is a common interview question.</p>
                    <p>Local variable</p>
                    let count = 0;
                    <p>let count = 0; <br />
                    Changing it doesn't tell React to render again.</p>

                    <p>State</p>
                    <p>const [count, setCount] = useState(0);</p>
                    <p>Updating through the setter schedules a React update.</p>
                    <p>A normal local variable belongs to the current function execution and doesn't persist as reactive component state across renders. State is managed by React and persists between renders while the component identity remains the same.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.33 State vs useRef</h4>
                    <p>We'll study refs later, but understand this difference.</p>
                    <p>State</p>
                    <p>const [count, setCount] = useState(0);</p>

                    <p>Changing state: → schedules render</p>

                    <p>Ref</p>
                    <p>const countRef = useRef(0);</p>
                    <p>Changing:</p>
                    <p>countRef.current++;</p>
                    <p>doesn't by itself cause a render.</p>

                    <h6 className="section-subheading">Q: When would you use useRef instead of state?</h6>
                    <p>For values that need to persist between renders but don't need to trigger a render when they change, or for accessing DOM nodes. We'll cover this in Hooks.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.34 Common useState Mistakes</h4>
                    <h6 className="section-subheading">Mistake 1 — Direct mutation</h6>
                    <pre>
                        <code>
                            {`
                            user.name = "Rahul";
                            Use:
                            setUser({
                                ...user,
                                name: "Rahul"
                            });
                            `}
                        </code>
                    </pre>

                    <h6 className="section-subheading">Mistake 2 — Using stale state</h6>
                    <p>Instead of:</p>
                    <pre>
                        <code>
                            {`
                            setCount(count + 1);
                            setCount(count + 1);
                            `}
                        </code>
                    </pre>
                    <p>when updates depend on previous state:</p>
                    <pre>
                        <code>
                            {`
                            setCount(prev => prev + 1);
                            setCount(prev => prev + 1);
                            `}
                        </code>
                    </pre>

                    <h6 className="section-subheading">Mistake 3 — Storing derived data unnecessarily</h6>
                    <p>Instead of:</p>
                    <pre>
                        <code>
                            {`
                            const [total, setTotal] = useState(0);
                            `}
                        </code>
                    </pre>
                    <p>when total is simply:</p>
                    <pre>
                        <code>
                            {`
                            const total = price * quantity;
                            derive it.
                            `}
                        </code>
                    </pre>

                    <h6 className="section-subheading">Mistake 4 — Putting everything into global state</h6>
                    <p>Not every piece of state belongs in Redux/Context/global state. Examples of local state:</p>
                    <ul>
                        <li>Modal open/close</li>
                        <li>Input value</li>
                        <li>Selected tab</li>
                        <li>Dropdown state</li>
                    </ul>
                    <p>These can often remain local.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.35 Real-World Example — User Management</h4>
                    <p>State might look like:</p>
                    <pre>
                        <code>
                            {`
                            function UserManagement() {
                            const [users, setUsers] = useState([]);
                            const [selectedUser, setSelectedUser] = useState(null);
                            const [isModalOpen, setIsModalOpen] = useState(false);
                            const [searchTerm, setSearchTerm] = useState("");
                            const [loading, setLoading] = useState(false);

                            // ...
                            }

                            Responsibilities:
                            users
                            → API data

                            selectedUser
                            → selected record

                            isModalOpen
                            → modal UI state

                            searchTerm
                            → search/filter state

                            loading
                            → API status
                            `}
                        </code>
                    </pre>
                    <p>This is exactly the type of state structure you should be comfortable explaining in an interview.</p>
                </div>

                <div className="section-content">
                    <h4 className="section-heading">4.36 Angular Comparison</h4>
                    <pre>
                        <code>
                            {`
                            | Angular              | React                                 |
                            | -------------------- | ------------------------------------- |
                            | Component property   | State                                 |
                            | this.count           | count                                 |
                            | Change property      | State setter                          |
                            | Template updates     | React render/update                   |
                            |   @Input()           | Props                                 |
                            | Shared service state | Context / state management            |
                            | NgRx                 | Redux Toolkit / other state libraries |


                            Important difference
                            Angular:
                            count = 0;
                            increment() {
                                this.count++;
                            }
                            React:
                            const [count, setCount] = useState(0);

                            const increment = () => {
                                setCount(prev => prev + 1);
                            };
                            Don't say they work exactly the same internally.
                            `}
                        </code>
                    </pre>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactUseState;
