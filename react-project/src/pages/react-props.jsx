import ReactPropsChild from "../pages/react-props-child";
import Card from "../components/card";
import Button from "../components/button";
import Table from "../components/table";

const handleDelete = () => {
  console.log("Deleted Successfully");
  alert("Button Clicked");
};

const handleMessage = (message) => {
  console.log(message);
  alert("Sent Message Succesfully from child to parent");
};

const users = [
    {
      id: 1,
      name: "Santhosh",
      role: "Frontend Developer"
    },
    {
      id: 2,
      name: "Rahul",
      role: "React Developer"
    }
];

const userTable=[
   {
    id: 1,
    name: "Santhosh",
    role: "Frontend Developer",
    status: "Active"
  },
  {
    id: 2,
    name: "Rahul",
    role: "Backend Developer",
    status: "Inactive"
  }
]

 const columns = [
    {
      key: "id",
      label: "ID"
    },
    {
      key: "name",
      label: "Name"
    },
    {
      key: "role",
      label: "Role"
    },
    {
      key: "status",
      label: "Status"
    }
  ];

function ReactProps() {
  return (
    <>
      <h2 className="page-title">Section 3 — React Props</h2>
      <div className="section">
        <div className="sub-section">
          <div className="section-body">
            <div className="section-content">
              <h6 className="section-heading">3.1 Props?</h6>
              <p>
                Props are read-only inputs passed from a parent component to a
                child component.
              </p>
              <p>They allow components to receive data and configuration from outside.</p>
              <p>
                This is the parent component and im passing inputs to child
                component as 'ReactPropsChild'
              </p>
              <ReactPropsChild
                name="Santhosh Pavadala"
                role="Frontend Developer"
                experience={4.1}
              ></ReactPropsChild>

              <h6 className="section-subheading">Q: What are Props?</h6>
              <p>Props are read-only inputs passed from a parent component to a child component. They are used to pass data, configuration, callback functions, and React elements between components.</p>
            </div>

            <div className="section-content">
              <h4>3.2 Why Do We Need Props?</h4>
              <p>Without props, components would have to contain hardcoded data.</p>
              <pre>
                <code>
                  {`
function UserCard() {
  return (
    <div>
      <h2>Santhosh</h2>
      <p>Frontend Developer</p>
    </div>
  );
}
This isn't reusable.


With props:
function UserCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

Now:
<UserCard
  name="Santhosh"
  role="Frontend Developer"
/>

<UserCard
  name="Rahul"
  role="React Developer"
/>

One component can display different data.
                  `}
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h6 className="section-heading">
                3.3 Props with Different Data Types
              </h6>
              <p>Props can contain:</p>
              <h6 className="section-heading">
                String, Number, Boolean, Array, Object, Function
              </h6>

              <ReactPropsChild
                name="Santhosh Pavadala"
                role="Frontend Developer"
                experience={4.1}
                isActive={true}
                skills={["Angular", "React", "JavaScript"]}
                user={{
                  id: 1,
                  name: "Santhosh",
                }}
                onDelete={handleDelete}
              />

            </div>

            <div className="section-content">
              <h4 className="section-heading">3.4 Destructuring Props</h4>
              <pre>
                <code>
                  {`
                  Instead of:
                  function User(props) {
                      return (
                        <h2>
                          {props.name}
                        </h2>
                      );
                    }

                    We can destructure:
                    function User({ name, role }) {
                      return (
                        <>
                          <h2>{name}</h2>
                          <p>{role}</p>
                        </>
                      );
                    }

                    This is very common in real projects.
                  `}
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                3.5 Props are Read-Only: This is an important interview
                question.
              </h4>
              <pre>
                <code>
                  {`
                    Suppose:
                    function Child({ name }) {
                      return <h2>{name}</h2>;
                    }

                    You should not do:
                    name = "Another Name";
                    `}
                </code>
              </pre>
              <p>
                Props should be treated as immutable/read-only inputs. <br />
                If a child needs to cause a change, the parent can provide a
                callback.
              </p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                3.6 Child-to-Parent Communication
              </h4>
              <p>
                React doesn't normally have a direct "child modifies parent"
                mechanism. <br />
                Instead:
              </p>
              <pre>
                <code>
                  {`
                    Parent
                      │
                      │ passes callback
                      ↓
                    Child
                      │
                      │ calls callback
                      ↓
                    Parent
                    `}
                </code>
              </pre>

              <p>Example:</p>
              <pre>
                <code>
                  {`
                    function Parent() {
                    const handleMessage = (message) => {
                      console.log(message);
                    };

                    return (
                      <Child onMessage={handleMessage} />
                    );
                  }

                  function Child({ onMessage }) {
                    return (
                      <button onClick={() => onMessage("Hello Parent")}>
                        Send Message
                      </button>
                    );
                  }
                    `}
                </code>
              </pre>

              <ReactPropsChild onMessage={handleMessage}></ReactPropsChild>
              <h6 className="section-subheading">
                Q: How do you send data from child to parent in React?
              </h6>
              <p>
                The parent passes a callback function to the child through
                props. The child invokes that callback with the required data.
              </p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                3.7 Passing Functions as Props
              </h4>
              <pre>
                <code>
                  {`
                    function App() {
                    const handleDelete = (id) => {
                      console.log("Delete:", id);
                    };

                    return <User onDelete={handleDelete} />;
                  }

                  function User({ onDelete }) {
                    return (
                      <button onClick={() => onDelete(101)}>
                        Delete
                      </button>
                    );
                  }

                  Here: onDelete() is function passing as prop to parent
                  App
                  │
                  │ onDelete()
                  ↓
                  User
                  │
                  │ calls function
                  ↓
                  App
                    `}
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">3.8 The children Prop</h4>
              <p>This is an important concept. When you write:</p>
              <pre>
                <code>
                  {`
                    <Button>
                      Login
                    </Button>

                    Login is available inside the Button component through children.

                    function Button({ children }) {
                      return (
                        <button>
                          {children}
                        </button>
                      );
                    }

                    Now in parent if you wrote :
                    <Button>Login</Button>
                    <Button>Register</Button>
                    <Button>Submit</Button>

                    Output:
                    [ Login ]
                    [ Register ]
                    [ Submit ]
                    `}
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                3.8 children with Complex Content
              </h4>
              <p>children isn't limited to text.</p>

              <Card>
                <h6>User Profile</h6>
                <p>Frontend Developer</p>
                <Button Varient="primary">View Profile</Button>
              </Card>

              <p>This is powerful for reusable layout components.</p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                3.10 Component Composition with children
              </h4>
              <pre>
                <code>
                  {`
                    function Layout({ children }) {
                      return (
                        <div className="layout">
                          <header>Header</header>

                          <main>
                            {children}
                          </main>

                          <footer>Footer</footer>
                        </div>
                      );
                    }

                    Ussage: 
                    function App() {
                      return (
                        <Layout>
                          <h1>Dashboard</h1>
                          <p>Welcome to the application.</p>
                        </Layout>
                      );
                    }
                    `}
                </code>
              </pre>

              <p>This pattern is commonly used for:</p>
              <ul>
                <li>- Layouts</li>
                <li>- Cards</li>
                <li>- Modals</li>
                <li>- Dialogs</li>
                <li>- Panels</li>
                <li>- Reusable containers</li>
              </ul>
            </div>

            <div className="section-content">
              <h4 className="section-heading">
                3.11 Passing Components as Props
              </h4>
              <p>You can pass a component or React element as a prop.</p>
              <pre>
                <code>
                  {`
                Example:
                function Layout({ header }) {
                  return (
                    <div>
                      {header}
                      <main>Content</main>
                    </div>
                  );
                }

                function App() {
                  return (
                    <Layout
                      header={<h1>Dashboard</h1>}
                    />
                  );
                }
                `}
                </code>
              </pre>

              <p>This provides flexible composition.</p>
            </div>

            <div className="section-contnent">
              <h4 className="section-heading">3.12 Prop Drilling</h4>
              <p>
                Prop drilling occurs when data needs to be passed through
                multiple intermediate components that don't actually use the
                data themselves, just to reach a deeply nested component.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`
                    App
                    ↓
                    Layout
                    ↓
                    Dashboard
                    ↓
                    UserSection
                    ↓
                    UserProfile
                    `}

                  {`
                    Suppose App has:
                    const user = {
                      name: "Santhosh"
                    };


                    But UserProfile needs it.
                    You might end up doing:

                    <App user={user} />
                      ↓
                    <Layout user={user} />
                      ↓
                    <Dashboard user={user} />
                      ↓
                    <UserSection user={user} />
                      ↓
                    <UserProfile user={user} />

                    That is prop drilling.
                    `}
                </code>
              </pre>
              <h6 className="section-subheading">Why is it a problem?</h6>
              <p>As applications become large:</p>
              <ul>
                <li>Props become difficult to track</li>
                <li>Intermediate components receive unnecessary props</li>
                <li>Component interfaces become harder to maintain</li>
              </ul>

              <h6 className="section-subheading">How to Solve Prop Drilling: Solutions</h6>
              <p>Depending on the situation:</p>
              <ul>
                <li>Component composition: Sometimes restructure components so data doesn't have to travel through unrelated layers.</li>
                <li>Context API: For broadly shared data:</li>
                <li>State management libraries: Redux, Zustand etc.</li>
                <li>Custom hooks</li>
              </ul>
            </div>
            <div className="section-content">
              <h4 className="section-heading">3.13 Prop Spreading</h4>
              <pre>
                <code>
                  {`
function Button(props) {
  return (
    <button {...props}>
      Click
    </button>
  );
}
Ussage:
<Button
  className="primary"
  disabled={false}
  onClick={handleClick}
/>
The props are spread onto the button.
                  `}
                </code>
              </pre>
              <p>Be careful <br />
              Don't blindly spread arbitrary props into DOM elements.</p>
              <pre><code>{`<button {...userData}>`}</code></pre>
              <p>could pass properties that don't belong on the DOM element.</p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">3.14 Props and State — Major Interview Question</h4>
              <h6 className="section-subheading">Props:</h6>
              <ul>
                <li>External input</li>
                <li>Parent → Child</li>
                <li>Read-only</li>
              </ul>

              <h6 className="section-subheading">State:</h6>
              <ul>
                <li>Component/application data</li>
                <li>Can change</li>
                <li>Updated through React state mechanisms</li>
              </ul>

              <h6 className="section-subheading">Example:</h6>
              <pre>
                <code>
                  {`
  function User({ name }) {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>
      <h2>{name}</h2>

      <button
        onClick={() => setIsOnline(!isOnline)}
      >
        {isOnline ? "Online" : "Offline"}
      </button>
    </div>
  );
}

Here:
name       → prop
isOnline   → state
                  `}
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h4 className="">3.15 Props Validation</h4>
              <p>For JavaScript projects, you may encounter PropTypes.</p>
              <pre>
                <code>
                  {`
import PropTypes from "prop-types";

function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

This provides runtime development-time validation.
                  `}
                </code>
              </pre>

              <h6 className="section-subheading">Modern React projects</h6>
              <h6 className="section-subheading">Many teams use TypeScript instead:</h6>
              <pre>
                <code>
                  {`
interface UserCardProps {
  name: string;
  age: number;
}

function UserCard({
  name,
  age
}: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}
                  `}
                </code>
              </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">3.16 Props with API Data</h4>
              <ReactPropsChild users={users}/>
            </div>

            <div className="section-content">
              <h4 className="section-heading">Real-World Example — Data Table</h4>
              <p>Imagine an API returns: userTable </p>

              <Table data={userTable}  columns={columns}></Table>
            </div>

            <div className="section-content">
              <h4 className="section-heading">3.17 Important Concept — Props Are Not Events</h4>
              <p>In Angular you may think: @Input() @Output(): React doesn't have the same decorator mechanism.</p>
              <p></p>

                <pre>
                  <code>
                    {`
                    React uses:Props 
                        ↓
                        Data
                          +
                        Callback functions

                    For example:
                    <Child
                      user={user}
                      onDelete={handleDelete}
                    />


                    Here:
                    user
                    → data

                    onDelete
                    → callback
                    This distinction is important in interviews.
                    `}
                  </code>
                </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">3.18 Props Are Not Automatically Two-Way Bound</h4>
              <p>React does not use automatic two-way binding.</p>
              <p>For example:</p>
              <pre>
                <code>
                  {`
                  <input value={name} />
                  doesn't automatically modify name.

                  You need:
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />


                  State
                    ↓
                    value
                    ↓
                    Input
                    ↓
                    onChange
                    ↓
                    setState
                    ↓
                    State

                    This is controlled input behavior.
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

export default ReactProps;
