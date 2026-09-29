import { useRef, useState } from "react";
import Button from "../components/button";

function ReactEventsAndForms() {
  // OnClick examples
  const handleClick = () => {
    console.log("Button clicked");
  };
  const handleUser = (name) => {
    console.log(name);
  };

  // OnChange examples
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const handleChange2 = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);

    console.log(event.target.name);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleBlur = () => {
    if (!email) {
      setError("Email is required");
    }
  };

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      console.log("Enter pressed");
    }
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    console.log("Button clicked");
  };

  const handleTargetClick = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
  };

  // React Forms code examples------------------------------
  const [userName, setUserName] = useState("");
  // console.log(userName);
  // console.log(setUserName);

  const userNameRef = useRef();
  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log(userNameRef.current.value);
  };

  // Text Input
  const [name, setName] = useState("");
  // console.log(name);

  // Number Input
  const [age, setAge] = useState("");
  // console.log(age);

  // Checkbox
  const [isActive, setIsActive] = useState(false);
  // console.log(isActive);

  // Radio
  const [gender, setGender] = useState("");
  // console.log(gender);

  // Dropdowns
  const [role, setRole] = useState("");
  // console.log(role);

  // TextArea

  const [description, setDescription] = useState("");
  console.log(description);

  // Handling multiple formfields
  // instead of individual declaration , we can make global declaration
  // const [name2, setName2] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange3 = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form Validations
  const[errors, setErrors] = useState({});
// Validation:
  const validate = () => {
    const newErrors = {};
    if(!formData.email) {
      newErrors.email = "Email is required"
    }
    if(!formData.password) {
      newErrors.password = "Password is required"
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  }

  // Submit Validation:
  const handleSubmit4 = (event) => {
    event.preventDefault();
    if(!validate()) {
      return;
    }
    console.log("Submit Api");
  }

  // File inputs
  const handleFileChange = (event)=> {
    const file = event.target.files[0];
    console.log(file);
    
  }

  return (
    <>
      <h2 className="page-title">SECTION 5 — React Events & Forms</h2>
      <div className="section">
        <h2 className="page-title">React Events</h2>

        <div className="sub-section">
          <div className="section-body">
            <p>We’ll cover this section in two major parts:</p>
            <h4 className="section-heading">Part A — React Events</h4>
            <ol>
              <li>What are Events in React?</li>
              <li>Synthetic Events</li>
              <li>
                <code>onClick</code>
              </li>
              <li>
                <code>onChange</code>
              </li>
              <li>
                <code>onSubmit</code>
              </li>
              <li>
                <code>onBlur</code>
              </li>
              <li>
                <code>onFocus</code>
              </li>
              <li>Keyboard Events</li>
              <li>Mouse Events</li>
              <li>Event Object</li>
              <li>Passing Arguments to Events</li>
              <li>
                <code>preventDefault()</code>
              </li>
              <li>
                <code>stopPropagation()</code>
              </li>
              <li>Event Bubbling</li>
              <li>Event Capturing</li>
              <li>Event Delegation</li>
              <li>Common Event Mistakes</li>
            </ol>

            <h4 className="section-heading">Part B — React Forms</h4>
            <ol start="18">
              <li>Controlled Components</li>
              <li>Uncontrolled Components</li>
              <li>Controlled vs Uncontrolled</li>
              <li>Text Input</li>
              <li>Number Input</li>
              <li>Checkbox</li>
              <li>Radio Buttons</li>
              <li>Select Dropdown</li>
              <li>Textarea</li>
              <li>File Input</li>
              <li>Multiple Form Fields</li>
              <li>Dynamic Forms</li>
              <li>Form Validation</li>
              <li>Error Handling</li>
              <li>Submit / Reset</li>
              <li>Login Form</li>
              <li>Registration Form</li>
              <li>Real-world Form Architecture</li>
            </ol>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">PART A — REACT EVENTS</h4>
            <h4 className="section-heading">1. What are Events in React?</h4>
            <p>
              An event is an action performed by the user or browser, such as:
            </p>
            <ul>
              <li>Clicking a button</li>
              <li>Typing into an input</li>
              <li>Submitting a form</li>
              <li>Moving the mouse</li>
              <li>Pressing a keyboard key</li>
              <li>Focusing an input</li>
              <li>Leaving an input</li>
            </ul>
            <p>React provides event handlers to respond to these actions.</p>
            <Button varient="primary" onClick={handleClick}>
              Click me
            </Button>
            <pre>
              <code>{`Notice: onClick={handleClick}, Not: onClick={handleClick()}`}</code>
            </pre>

            <h6 className="section-subheading">
              Q: How do you handle events in React?
            </h6>
            <p>
              React handles events using event handler props such as onClick,
              onChange, onSubmit, onMouseEnter, and onKeyDown. We pass a
              function reference to the event handler, and React invokes that
              function when the event occurs.
            </p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">2. React Event Naming</h4>
            <p>HTML normally uses:</p>
            <pre>
              <code>{`<button onclick="handleClick()">`}</code>
            </pre>
            <p>React uses camelCase:</p>
            <pre>
              <code>{`<button onClick={handleClick}>`}</code>
            </pre>
            <pre>
              <code>
                {`
                    | HTML        | React       |
                    | ----------- | ----------  |
                    | onclick     | onClick     |
                    | onchange    | onChange    |
                    | onsubmit    | onSubmit    |
                    | onfocus     | onFocus     |
                    | onblur      | onBlur      |
                    | onkeydown   | onKeyDown   |
                    | onkeyup     | onKeyUp     |
                    | onmouseover | onMouseOver |

                    `}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">3. onClick</h4>
            <p>Used when an element is clicked.</p>
            <Button varient="primary" onClick={handleClick}>
              Click me
            </Button>

            <h6 className="section-subheading">Passing an argument</h6>
            <p>Don't do this:</p>
            <pre>
              <code>{`
<button onClick={handleUser("Santhosh")}>
Because the function executes during rendering.
            `}</code>
            </pre>

            <p>Instead:</p>
            <Button varient="primary" onClick={() => handleUser("Santhosh")}>
              Click User
            </Button>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">4. onChange</h4>
            <p>One of the most important React events for forms.</p>
            <p>Example:</p>

            <input type="text" className="form-input" onChange={handleChange} />
            <p>When the user types: event.target.value changes accordingly.</p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">5. Event Object</h4>
            <p>React provides an event object to the handler.</p>
            <input
              className="form-input"
              name="username"
              type="text"
              onChange={handleChange2}
            />
            <p>Important properties:</p>
            <ul>
              <li>event.target</li>
              <li>event.target.value</li>
              <li>event.target.name</li>
              <li>event.target.checked</li>
              <li>event.type</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">6. onSubmit</h4>
            <p>Used to handle form submission. Example below:</p>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" className="form-input" />
              <Button varient="success" type="submit">
                Login
              </Button>
            </form>
            <p>Why: event.preventDefault();</p>
            <p>
              Because the browser's default form submission normally
              reloads/navigates the page. <br />
              In a React SPA, we usually prevent that behavior and handle
              submission ourselves.
            </p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">7. preventDefault()</h4>
            <p>
              preventDefault() prevents the browser's default behavior for an
              event.
            </p>
            <p>Example:</p>
            <pre>
              <code>
                {`
                        const handleSubmit = (event) => {
                            event.preventDefault();
                            console.log("Custom form submission");
                        };
                        `}
              </code>
            </pre>
            <p>Common use cases:</p>
            <ul>
              <li>Forms</li>
              <li>Links</li>
              <li>Drag/drop</li>
              <li>Custom browser interactions</li>
            </ul>
            <p>Example:</p>
            <a
              href="/react-props"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Open
            </a>
            <p>The link won't navigate.</p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">8. onFocus</h4>
            <p>Triggered when an element receives focus.</p>
            <input
              className="form-input"
              onFocus={() => {
                console.log("Input focused");
              }}
            />

            <p>Useful for:</p>
            <ul>
              <li>Showing hints</li>
              <li>Highlighting input</li>
              <li>Starting validation logic</li>
              <li>Search suggestions</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">9. onBlur</h4>
            <p>Triggered when an element loses focus.</p>
            <input
              className="form-input"
              type="email"
              onBlur={() => {
                console.log("Input lost focus");
              }}
            />
            <p>Very commonly used for validation.</p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section">10. Keyboard Events</h4>
            <p>Important keyboard events: onKeyDown, onKeyUp</p>
            <input className="form-input" onKeyDown={handleKeyDown} />
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">11. Mouse Events</h4>
            <p>Common mouse events:</p>
            <ul>
              <li>onClick</li>
              <li>onDoubleClick</li>
              <li>onMouseEnter</li>
              <li>onMouseLeave</li>
              <li>onMouseMove</li>
              <li>onMouseDown</li>
              <li>onMouseUp</li>
            </ul>

            <p>Examples:</p>
            <div
              onMouseEnter={() => console.log("Mouse Entered")}
              onMouseLeave={() => console.log("Mouse Removed")}
            >
              Hover me
            </div>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">12. Synthetic Events</h4>
            <p>This is a common interview question.</p>
            <p>
              React provides a normalized event system through Synthetic Events,
              giving event handlers a consistent interface across browsers.
            </p>

            <pre>
              <code>
                {`
                    const handleClick = (event) => {
                        console.log(event);
                    };
                    `}
              </code>
            </pre>
            <p>The event object is React's event abstraction.</p>
            <p>
              React uses a Synthetic Event system that provides a consistent
              event interface across browsers. Event handlers receive an event
              object with properties and methods such as target, currentTarget,
              preventDefault(), and stopPropagation().
            </p>
            <h6 className="section-subheading">Important modern nuance</h6>
            <p>
              Older React versions used event pooling, where Synthetic Event
              objects were reused. Modern React no longer uses event pooling in
              the same way, so you generally don't need to call event.persist().
            </p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">13. Event Bubbling</h4>
            <p>This is very important for interviews.</p>

            <div onClick={() => console.log("Parent clicked")}>
              <Button onClick={() => console.log("Child clicked")}>
                Event Bubbling
              </Button>
            </div>

            <p>Clicking the button produces: Child Parent</p>
            <p>
              Why?: Because the event bubbles from the target element upward
              through its ancestors.
            </p>
            <p>Button - Parent div - Grandparent</p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">14. stopPropagation()</h4>
            <p>Used to stop event propagation.</p>
            <div onClick={() => console.log("Parent clicked")}>
              <Button onClick={handleButtonClick}>Click</Button>
            </div>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">15. Event Capturing</h4>
            <p>
              Events can also travel from parent toward the target during the
              capture phase.
            </p>
            <p>React provides: onClickCapture</p>

            <div onClickCapture={() => console.log("Parent capture")}>
              <button onClick={() => console.log("Button")}>Click</button>
            </div>

            <p>Conceptually:</p>
            <pre>
              <code>
                {`
                        Capture phase
                        Parent
                        ↓
                        Button

                        Target

                        Bubble phase
                        Button
                        ↓
                        Parent
                        `}
              </code>
            </pre>

            <h6 className="section-subheading">
              Q: Difference between bubbling and capturing?
            </h6>
            <pre>
              <code>
                {`
                    | Bubbling                         | Capturing        |
                    | -------------------------------- | ---------------- |
                    | Target → Parent                  | Parent → Target  |
                    | Default event flow commonly used | Capture phase    |
                    | onClick                          | onClickCapture   |
                    `}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">16. target vs currentTarget</h4>
            <p></p>
            <div onClick={handleTargetClick}>
              <button>Click</button>
            </div>

            <p>
              If the button is clicked: event.target <br />
              The actual element that initiated the event. <br />
              "button"
            </p>

            <p>
              event.currentTarget: The element whose handler is currently
              executing. <br />
              "div" <br />
              This distinction is very useful in event delegation.
            </p>
          </div>
        </div>

        <h2 className="page-title">React - Forms</h2>
        <h6 className="section-subheading">
          Now we reach one of the most important React interview areas.
        </h6>
        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">17. Controlled Components</h4>
            <p>
              A controlled component is a form element whose value is controlled
              by React state.
            </p>
            <p>Example:</p>
            <pre>
              <code>
                {`
                import { useState } from "react";

                function Login() {
                  const [username, setUsername] = useState("");

                  return (
                    <input
                      type="text"
                      value={username}
                      onChange={(event) =>
                        setUsername(event.target.value)
                      }
                    />
                  );
                }

                export default Login;
                `}
              </code>
            </pre>

            <h6 className="section-subheading">Login</h6>
            <form action="">
              <label htmlFor="">UserName</label>
              <input
                className="form-input"
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </form>

            <p>Data flow from:</p>
            <pre>
              <code>
                {`
                User types
                    ↓
                onChange
                    ↓
                setUsername()
                    ↓
                React state
                    ↓
                  value
                    ↓
                  Input

                  This is the standard React form pattern.
                `}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">18. Uncontrolled Components</h4>
            <p>
              In an uncontrolled component, the DOM maintains the form value
              rather than React state. <br />
              Usually we use useRef.
            </p>
            <pre>
              <code>
                {`
                import { useRef } from "react";

                function Login() {
                  const usernameRef = useRef();
                  const handleSubmit = (event) => {
                    event.preventDefault();
                    console.log(usernameRef.current.value);
                  };

                  return (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        ref={usernameRef}
                      />
                      <button type="submit">
                        Login
                      </button>
                    </form>
                  );
                }

                export default Login;
                `}
              </code>
            </pre>

            <form action="" onSubmit={handleSubmit2}>
              <input type="text" className="form-input" ref={userNameRef} />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <div className="section-heading">
              19. Controlled vs Uncontrolled
            </div>
            <p>Very common interview question.</p>
            <pre>
              <code>
                {`
                | Controlled               | Uncontrolled                       |
                | ------------------------ | ---------------------------------- |
                | React controls value     | DOM controls value                 |
                | Uses state               | Usually uses ref                   |
                | value + onChange         | ref                                |
                | Easy validation          | Validation can be less centralized |
                | More React-driven        | More DOM-driven                    |
                | Common for complex forms | Useful for simple/special cases    |
                `}
              </code>
            </pre>

            <h6 className="section-subheading">Interview answer</h6>
            <p>
              In controlled components, React state is the source of truth for
              the input value. In uncontrolled components, the DOM maintains the
              value and React accesses it using a ref. Controlled components are
              generally preferred when we need validation, conditional UI, or
              tight control over form state.
            </p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">20. Text Input</h4>
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">21. Number Input</h4>
            <label htmlFor="">Age</label>
            <input
              type="number"
              className="form-input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <p>
              Important: <br />
              Even though: type="number" the value from: e.target.value is
              generally a string.
            </p>
            <p>If you need a number: const value = Number(e.target.value);</p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">22. Checkbox</h4>
            <p>Checkbox uses: checked instead of: value</p>
            <label htmlFor="">Check Active</label>
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            <p>Important: e.target.checked returns:true or false</p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">23. Radio Buttons</h4>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">24. Select Dropdown</h4>
            <select
              className="form-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="developer">Developer</option>
              <option value="tester">Tester</option>
            </select>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">25. Textarea</h4>
            <label htmlFor="">Description</label>
            <textarea
              className="form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">
              26. Handling Multiple Form Fields
            </h4>
            <p>Instead of:</p>
            <pre>
              <code>
                {`
                const [name, setName] = useState("");
                const [email, setEmail] = useState("");
                const [phone, setPhone] = useState("");
                `}
              </code>
            </pre>

            <p>we can maintain an object:</p>
            <pre>
              <code>
                {`
                const [formData, setFormData] = useState({
                  name: "",
                  email: "",
                  phone: ""
                });
                `}
              </code>
            </pre>

            <p>Then:</p>
            <pre>
              <code>
                {`
                const handleChange = (event) => {
                const { name, value } = event.target;
                setFormData(prev => ({
                  ...prev,
                  [name]: value
                }));
              };

              HTML:
              <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                `}
              </code>
            </pre>

            <div>
              <label htmlFor="">Name</label>
              <input
                className="form-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="">Email</label>
              <input
                className="form-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="">Phone</label>
              <input
                className="form-input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">27. Why [name]: value?</h4>
            <p>This is JavaScript computed property syntax.</p>
            <p>If: name = "email", then [name]: value, becomes: email: value</p>
            <p>So: </p>
            <pre>
              <code>
                {`
                setFormData(prev => ({
                  ...prev,
                  [name]: value
                }));
                `}
              </code>
            </pre>
            <p>Means: Keep all previous fields and update only the field whose name matches the input.</p>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">28. Complete Login Form</h4>
            <p>Here's a practical example you should understand for interviews.</p>
            <p>I am creating seperate componet for this Login form to reuse for login purpose. <br />
              component name is 'LoginForm'.
            </p>
            <h6 className="section-subheading">Data Flow:</h6>
            <pre>
              <code>
                {`
                Input
                  ↓
                onChange
                  ↓
                handleChange
                  ↓
                setFormData
                  ↓
                React State
                  ↓
                Input value
                `}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">29. Form Validation</h4>
            <p>Let's add validation.</p>
            {errors.email && (
              <p>{errors.email}</p>
            )}
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">30. Dynamic Forms</h4>
            <p>Initial state:</p>
            <pre>
              <code>
                {`
                const [skills, setSkills] = useState([
                  {
                    id: 1,
                    name: "Angular"
                  }
                ]);

                Add:
                const addSkill = () => {
                  setSkills(prev => [
                    ...prev,
                    {
                      id: Date.now(),
                      name: ""
                    }
                  ]);
                };

                update:
                  const updateSkill = (id, value) => {
                  setSkills(prev =>
                    prev.map(skill =>
                      skill.id === id
                        ? { ...skill, name: value }
                        : skill
                    )
                  );
                };

                Remove:
                const removeSkill = (id) => {
                  setSkills(prev =>
                    prev.filter(skill => skill.id !== id)
                  );

                };
                This connects directly with the array state functionality we practiced earlier.
                `}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">31. File Input</h4>
            <p>File inputs are special.</p>
            <input className="form-input"
              type="file"
              onChange={handleFileChange}
            />

            <p>For multiple files:</p>
            <input className="form-input"
              type="file"
              multiple
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">32. Form Reset</h4>
            <p>You can reset controlled form state:</p>

            <pre>
              <code>
                {`
                const initialForm = {
                  name: "",
                  email: "",
                  password: ""
                };
                const [formData, setFormData] = useState(initialForm);

                Then:
                const handleReset = () => {
                  setFormData(initialForm);
                };
                `}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-body">
            <h4 className="section-heading">33. Real-World Form Flow</h4>
            <p>In a real application:</p>
            <pre>
              <code>
                {`
                User enters data
                      ↓
                Controlled Inputs
                      ↓
                React State
                      ↓
                Validation
                      ↓
                Submit
                      ↓
                API Service
                      ↓
                Backend
                      ↓
                Success / Error
                      ↓
                UI Update
                `}
              </code>
            </pre>
            <p>For your React project, this could be:</p>

            <pre>
              <code>
                {`
                LoginForm
                    ↓
                Validation
                    ↓
                authService.login()
                    ↓
                POST /login
                    ↓
                Token
                    ↓
                Store authentication state
                    ↓
                Navigate Dashboard
                `}
              </code>
            </pre>
            <p>Later, when we reach API Integration + Context/Redux, we'll connect this properly.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReactEventsAndForms;
