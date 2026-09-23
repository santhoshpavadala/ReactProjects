import Button from "../components/button";

function ReactComponents() {
  return (
    <>
      <h2 className="page-title">Section 2 — React Components</h2>
      <div className="section">
        <div className="sub-section">
          <h4 className="section-heading">React Components</h4>
          <div className="section-body">
            <div className="section-content">
              <h4 className="section-heading">2.1 What is a Component?</h4>
              <p>
                A component is a reusable, independent piece of UI that contains
                its own structure, behavior, and optionally state. <br />A React
                application is built by combining multiple components.
              </p>
              <pre>
                <code>
                  {`
                App
                │
                ├── Header
                ├── Sidebar
                ├── Dashboard
                │   ├── StatisticsCard
                │   ├── RevenueChart
                │   └── UserTable
                └── Footer

                Each of these can be a React component.
                `}
                </code>
              </pre>

              <p>Simple example</p>
              <pre>
                <code>
                  {`
                function Welcome() {
                  return <h1>Welcome to React</h1>;
                }

                export default Welcome;

                Using It or Calling in other components:

                function App() {
                  return (
                    <div>
                      <Welcome />
                    </div>
                  );
                }
                `}
                </code>
              </pre>

              <h6 className="section-subheading">Interview:</h6>
              <p>
                A React component is a reusable building block of a React
                application that returns UI and can receive data through props
                and manage data through state.
              </p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">2.2 Types of React Components</h4>
              <p>Historically, React had two major types:</p>
              <ul>
                <li>Functional Components</li>
                <li>Class Components</li>
              </ul>
              <p>Modern React primarily uses functional components with Hooks.</p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">2.3 Functional Components</h4>
              <p>A functional component is a JavaScript function that returns React UI.</p>
              <pre>
                <code>
                  {`
                  function User() {
                    return (
                      <div>
                        <h2>Santhosh</h2>
                        <p>Frontend Developer</p>
                      </div>
                    );
                  }

                  Arrow function: 
                  const User = () => {
                    return (
                      <div>
                        <h2>Santhosh</h2>
                        <p>Frontend Developer</p>
                      </div>
                    );
                  };

                  Short form:
                  const User = () => <h2>Santhosh</h2>;
                  `}
                </code>
              </pre>
              <h6 className="section-subheading">Q: What is a functional component?</h6>
              <p>A functional component is a JavaScript function that returns React elements and can use Hooks to manage state, effects, context, and other React features.</p>
            </div>

            <div className="section-content">
              <h4 className="section-heading">2.4 Class Components</h4>
              <p>Class components were commonly used before Hooks became available.</p>
              <pre>
                <code>
                  {`
                  class Welcome extends React.Component {
                    render() {
                      return <h1>Welcome</h1>;
                    }
                  }
                  `}
                </code>
              </pre>
              <p>Modern applications generally prefer function components.</p>
              <h6 className="section-subheading">Q: Are class components completely invalid in React?</h6>
              <p>No. <br />
              They are still supported, but modern React development generally favors function components and Hooks.</p>
              <p>Functional components are the modern approach in React. They use Hooks such as useState, useEffect, and useContext to provide functionality that previously required class components and lifecycle methods.</p>
            <h4 className="section-subheading">2.5 Functional vs Class Components</h4>
            <pre>
              <code>
                {`
      | Functional                         | Class                                       |
| ---------------------------------- | ------------------------------------------- |
| JavaScript function                | JavaScript class                            |
| Uses Hooks                         | Uses lifecycle methods                      |
| Modern approach                    | Legacy/common in older applications         |
| Less boilerplate                   | More boilerplate                            |
| Easier to compose logic with Hooks | Logic often spread across lifecycle methods |
| useState()                         | this.state                                  |
| useEffect()                        | Lifecycle methods                           |

                
                `}
              </code>
            </pre>
            
            </div>

            <div className="section-content">
              <h4 className="section-heading">2.6 Component Naming</h4>
              <p>React component names should start with an uppercase letter.</p>
              <pre>
                <code>
                  {`
                  function UserCard() {
                    return <div>User</div>;
                  }
                  usage should start with capital
                  <UserCard />


                   inncorrect usage
                  function userCard() {
                    return <div>User</div>;
                  }
                  `}
                </code>
              </pre>
              <p>React distinguishes user-defined components from native HTML elements using capitalization.</p>
                    <pre>
                      <code>
                        {`
                        <div />
                        means HTML element.

                        <UserCard />
                        means React component.
                        `}
                      </code>
                    </pre>
            </div>

            <div className="section-content">
              <h4 className="section-heading">2.7 Component Reusability</h4>
              <p>One of the major benefits of components is reusability.</p>
              <p>Instead of creating: Login Button, Register Button, Submit Button, Cancel Button</p>

              <Button variant="primary">Login</Button>

              <Button variant="secondary">Register</Button>

              <Button variant="success">Submit</Button>

              <Button variant="danger">Cancel</Button>

              <Button variant="warning">Warning</Button>

              <Button variant="outline">Cancel</Button>
            </div>

            <div className="section-content">
              <h4 className="section-heading">2.8 Component Composition</h4>
              <p>Component composition means building larger components by combining smaller components.</p>
              <p>Component composition is the practice of building complex UIs by combining smaller, reusable components instead of creating one large component.</p>
              <pre>
                <code>
                  {`
                  function Header() {
                    return <header>Header</header>;
                  }

                  function Sidebar() {
                    return <aside>Sidebar</aside>;
                  }

                  function Dashboard() {
                    return <main>Dashboard</main>;
                  }

                  function App() {
                    return (
                      <>
                        <Header />
                        <Sidebar />
                        <Dashboard />
                      </>
                    );
                  }
                  `}
                </code>
              </pre>
            </div>
            <div className="section-content">
              <h4 className="section-heading">2.9 Parent and Child Components</h4>
              <pre>
                <code>
                  {`
                  Suppose:
                  function Parent() {
                    return <Child />;
                  }

                  function Child() {
                    return <h2>Child Component</h2>;
                  }
                    Parent
                      ↓
                    Child
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

export default ReactComponents;
