function HomeDashboard() {
  return (
    <>
      <h2 className="page-title">React Basics Notes</h2>

      <div className="section">
        <div className="sub-section">
          <h4 className="section-heading">1. What is React?</h4>
          <div className="section-body">
            <p>
              <strong>Definition: </strong>
              React is a JavaScript library used to build user interfaces using
              reusable components.
            </p>
            <p>
              <strong>Features</strong>
              <ul>
                <li>Component-Based Architecture</li>
                <li>Virtual DOM</li>
                <li>One-Way Data Binding</li>
                <li>Reusable UI Components</li>
                <li>Fast Rendering</li>
                <li>Large Ecosystem</li>
              </ul>

              <p>
                <strong>Created By: </strong>
                Meta (Facebook)
              </p>
            </p>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">2. What is Vite?</h4>

          <div className="section-body">
            <p>
              <strong>Definition: </strong>
              Vite is a modern frontend build tool and development server used
              to create React applications.
            </p>

            <p>
              <strong>Responsibilities:</strong>
            </p>

            <ul>
              <li>Run Development Server</li>
              <li>Compile JSX</li>
              <li>Hot Module Reloading (HMR)</li>
              <li>Production Build</li>
              <li>Asset Optimization</li>
            </ul>

            <p>
              <strong>Create React Project:</strong>
            </p>

            <pre>
              <code>
                npm create vite@latest react-dashboard -- --template react
              </code>
            </pre>

            <p>
              <strong>Install Packages:</strong>
            </p>

            <pre>
              <code>npm install</code>
            </pre>

            <p>
              <strong>Run Application:</strong>
            </p>

            <pre>
              <code>npm run dev</code>
            </pre>

            <p>
              <strong>Build Application:</strong>
            </p>

            <pre>
              <code>npm run build</code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">3. Project Structure</h4>

          <div className="section-body">
            <p>
              <strong>Project Structure:</strong>
            </p>

            <pre>
              <code>
                {`src
│
├── assets
├── components
├── layouts
├── pages
├── routes
├── services
├── styles
│
├── App.jsx
├── main.jsx
└── index.css`}
              </code>
            </pre>

            <p>
              <strong>Folder Purpose:</strong>
            </p>

            <p>
              <strong>assets:</strong>
              <br />
              Stores images, icons, fonts, and static files.
            </p>

            <p>
              <strong>components:</strong>
              <br />
              Reusable UI components.
            </p>

            <p>
              <strong>Examples:</strong>
            </p>

            <ul>
              <li>Header</li>
              <li>Sidebar</li>
              <li>UserCard</li>
            </ul>

            <p>
              <strong>layouts:</strong>
              <br />
              Application layout structure.
            </p>

            <p>
              <strong>Examples:</strong>
            </p>

            <ul>
              <li>MainLayout</li>
              <li>AuthLayout</li>
            </ul>

            <p>
              <strong>pages:</strong>
              <br />
              Page-level components.
            </p>

            <p>
              <strong>Examples:</strong>
            </p>

            <ul>
              <li>HomeDashboard</li>
              <li>UsersDashboard</li>
              <li>PostsDashboard</li>
            </ul>

            <p>
              <strong>routes:</strong>
              <br />
              Application routing configuration.
            </p>

            <p>
              <strong>services:</strong>
              <br />
              API-related logic and HTTP requests.
            </p>

            <p>
              <strong>styles:</strong>
              <br />
              Global styles, variables, utilities, and themes.
            </p>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">4. Components</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />A Component is a reusable piece of UI.
            </p>

            <p>
              <strong>Syntax:</strong>
            </p>

            <pre>
              <code>
                {`function Header() {
  return (
    <h1>Header Component</h1>
  );
}

export default Header;`}
              </code>
            </pre>

            <p>
              <strong>Usage:</strong>
            </p>

            <pre>
              <code>
                {`import Header from './Header';

function App() {
  return <Header />;
}`}
              </code>
            </pre>

            <p>
              <strong>Rules:</strong>
            </p>

            <p>✔ Component Name Starts With Capital Letter</p>

            <ul>
              <li>Header</li>
              <li>Sidebar</li>
              <li>UserDashboard</li>
            </ul>

            <p>❌ Wrong Naming Convention</p>

            <ul>
              <li>header</li>
              <li>sidebar</li>
              <li>userDashboard</li>
            </ul>

            <p>
              <strong>Important Points:</strong>
            </p>

            <ul>
              <li>Components are reusable UI blocks.</li>
              <li>Each component should have a single responsibility.</li>
              <li>A component must return JSX.</li>
              <li>Components can be nested inside other components.</li>
              <li>Components help keep code modular and maintainable.</li>
            </ul>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`function App() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">5. JSX</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              JSX stands for JavaScript XML.
            </p>

            <p>
              It allows HTML-like syntax inside JavaScript and makes UI
              development easier and more readable.
            </p>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`const name = "Santhosh";

function App() {
  return (
    <h1>Hello {name}</h1>
  );
}`}
              </code>
            </pre>

            <p>
              <strong>Angular vs React:</strong>
            </p>

            <p>Angular</p>

            <pre>
              <code>{`{{name}}`}</code>
            </pre>

            <p>React</p>

            <pre>
              <code>{`{name}`}</code>
            </pre>

            <p>
              <strong>JSX Rules:</strong>
            </p>

            <ul>
              <li>JSX must return a single parent element.</li>
              <li>
                JavaScript expressions are written inside curly braces {}.
              </li>
              <li>
                Use <code>className</code> instead of <code>class</code>.
              </li>
              <li>
                Use <code>htmlFor</code> instead of <code>for</code>.
              </li>
              <li>Every tag must be properly closed.</li>
            </ul>

            <p>
              <strong>Examples:</strong>
            </p>

            <pre>
              <code>
                {`<img src="logo.png" alt="Logo" />

<input type="text" />

<br />`}
              </code>
            </pre>

            <p>
              <strong>Why JSX?</strong>
            </p>

            <ul>
              <li>Easy to read and write.</li>
              <li>Allows mixing HTML and JavaScript.</li>
              <li>Improves developer productivity.</li>
              <li>Makes component structure more intuitive.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">6. Props</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Props (Properties) are used to pass data from a Parent Component
              to a Child Component.
            </p>

            <p>
              Props are read-only and cannot be modified by the child component.
            </p>

            <p>
              <strong>Parent Component:</strong>
            </p>

            <pre>
              <code>
                {`<UserCard
  name="Santhosh"
  age={27}
/>`}
              </code>
            </pre>

            <p>
              <strong>Child Component:</strong>
            </p>

            <pre>
              <code>
                {`function UserCard({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}`}
              </code>
            </pre>

            <p>
              <strong>Angular Equivalent:</strong>
            </p>

            <pre>
              <code>{`@Input()`}</code>
            </pre>

            <p>
              <strong>Props Flow:</strong>
            </p>

            <pre>
              <code>
                {`Parent Component
        ↓
      Props
        ↓
Child Component`}
              </code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`function App() {
  return (
    <UserCard
      name="Santhosh"
      role="Frontend Developer"
    />
  );
}

function UserCard({ name, role }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{role}</p>
    </>
  );
}`}
              </code>
            </pre>

            <p>
              <strong>Rules:</strong>
            </p>

            <ul>
              <li>Props are read-only.</li>
              <li>Data flows from Parent to Child.</li>
              <li>
                Props can be strings, numbers, arrays, objects, functions, or
                components.
              </li>
              <li>Props help create reusable components.</li>
            </ul>

            <p>
              <strong>Why Use Props?</strong>
            </p>

            <ul>
              <li>Component Reusability.</li>
              <li>Dynamic Data Rendering.</li>
              <li>Parent to Child Communication.</li>
              <li>Cleaner Component Architecture.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">7. useState Hook</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              useState is a React Hook used to store and update component state.
            </p>

            <p>
              State is data that can change over time and causes the component
              to re-render when updated.
            </p>

            <p>
              <strong>Syntax:</strong>
            </p>

            <pre>
              <code>{`const [count, setCount] = useState(0);`}</code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>{`const [users, setUsers] = useState([]);`}</code>
            </pre>

            <p>
              <strong>Update State:</strong>
            </p>

            <pre>
              <code>{`setUsers(response.data);`}</code>
            </pre>

            <p>
              <strong>Syntax Breakdown:</strong>
            </p>

            <pre>
              <code>{`const [state, setState] = useState(initialValue);`}</code>
            </pre>

            <ul>
              <li>
                <strong>state</strong> → Current value.
              </li>
              <li>
                <strong>setState</strong> → Function used to update state.
              </li>
              <li>
                <strong>initialValue</strong> → Initial state value.
              </li>
            </ul>

            <p>
              <strong>Examples:</strong>
            </p>

            <pre>
              <code>
                {`const [name, setName] = useState('');

const [count, setCount] = useState(0);

const [users, setUsers] = useState([]);

const [loading, setLoading] = useState(false);`}
              </code>
            </pre>

            <p>
              <strong>Angular Equivalent:</strong>
            </p>

            <pre>
              <code>
                {`name = '';
users = [];
loading = false;`}
              </code>
            </pre>

            <p>
              <strong>Why useState?</strong>
            </p>

            <ul>
              <li>Manage dynamic data.</li>
              <li>Store API responses.</li>
              <li>Handle forms.</li>
              <li>Manage UI states like loading and errors.</li>
              <li>Trigger component re-rendering.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">8. useEffect Hook</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              useEffect is a React Hook used to perform side effects in
              functional components.
            </p>

            <p>
              <strong>Common Use Cases:</strong>
            </p>

            <ul>
              <li>API Calls</li>
              <li>Timers</li>
              <li>Subscriptions</li>
              <li>Event Listeners</li>
              <li>DOM Manipulation</li>
            </ul>

            <p>
              <strong>Basic Syntax:</strong>
            </p>

            <pre>
              <code>
                {`useEffect(() => {

}, []);`}
              </code>
            </pre>

            <p>
              <strong>Run Once (Component Load):</strong>
            </p>

            <pre>
              <code>
                {`useEffect(() => {
  loadUsers();
}, []);`}
              </code>
            </pre>

            <p>
              <strong>Angular Equivalent:</strong>
            </p>

            <pre>
              <code>{`ngOnInit()`}</code>
            </pre>

            <p>
              <strong>Dependency Array:</strong>
            </p>

            <pre>
              <code>
                {`useEffect(() => {

}, [dependency]);`}
              </code>
            </pre>

            <ul>
              <li>
                <strong>[]</strong> → Runs once when component loads.
              </li>
              <li>
                <strong>[value]</strong> → Runs when value changes.
              </li>
              <li>
                <strong>No Array</strong> → Runs on every render.
              </li>
            </ul>

            <p>
              <strong>API Call Example:</strong>
            </p>

            <pre>
              <code>
                {`useEffect(() => {
  loadUsers();
}, []);

const loadUsers = async () => {
  const response = await getUsers();
  setUsers(response.data);
};`}
              </code>
            </pre>

            <p>
              <strong>Why useEffect?</strong>
            </p>

            <ul>
              <li>Fetch data from APIs.</li>
              <li>Execute code on component load.</li>
              <li>Watch for state changes.</li>
              <li>Manage external resources.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">9. Routing</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Routing allows navigation between different pages/components
              without reloading the entire application.
            </p>

            <p>
              <strong>Install React Router:</strong>
            </p>

            <pre>
              <code>{`npm install react-router-dom`}</code>
            </pre>

            <p>
              <strong>Main Routing Components:</strong>
            </p>

            <ul>
              <li>BrowserRouter</li>
              <li>Routes</li>
              <li>Route</li>
              <li>Outlet</li>
              <li>NavLink</li>
            </ul>

            <p>
              <strong>Angular Equivalent:</strong>
            </p>

            <ul>
              <li>RouterModule</li>
              <li>Routes</li>
              <li>routerLink</li>
              <li>router-outlet</li>
            </ul>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`<Routes>
  <Route
    path="/users"
    element={<UsersDashboard />}
  />
</Routes>`}
              </code>
            </pre>

            <p>
              <strong>Why Routing?</strong>
            </p>

            <ul>
              <li>Navigate between pages.</li>
              <li>Create Single Page Applications (SPA).</li>
              <li>Improve user experience.</li>
              <li>Support dynamic URLs.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">10. BrowserRouter</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              BrowserRouter wraps the entire React application and enables
              routing functionality.
            </p>

            <p>
              It uses the browser's History API to keep the UI in sync with the
              URL.
            </p>

            <p>
              <strong>Syntax:</strong>
            </p>

            <pre>
              <code>
                {`<BrowserRouter>
  <App />
</BrowserRouter>`}
              </code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`import {
  BrowserRouter
} from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomeDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}`}
              </code>
            </pre>

            <p>
              <strong>Responsibilities:</strong>
            </p>

            <ul>
              <li>Manages application URLs.</li>
              <li>Enables client-side routing.</li>
              <li>Works with Routes and Route components.</li>
              <li>Prevents full page reloads.</li>
            </ul>

            <p>
              <strong>Important:</strong>
            </p>

            <ul>
              <li>
                BrowserRouter should be used only once in the application.
              </li>
              <li>Usually placed inside AppRoutes.jsx or main.jsx.</li>
              <li>All routes must be wrapped inside BrowserRouter.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">11. Routes</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Routes is a container that holds all Route definitions in a React
              application.
            </p>

            <p>
              It is responsible for matching the current URL and rendering the
              corresponding component.
            </p>

            <p>
              <strong>Syntax:</strong>
            </p>

            <pre>
              <code>
                {`<Routes>

</Routes>`}
              </code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`<Routes>
  <Route
    path="/"
    element={<HomeDashboard />}
  />

  <Route
    path="/users"
    element={<UsersDashboard />}
  />
</Routes>`}
              </code>
            </pre>

            <p>
              <strong>Responsibilities:</strong>
            </p>

            <ul>
              <li>Contains all application routes.</li>
              <li>Matches URL paths.</li>
              <li>Renders the correct page component.</li>
              <li>Works together with BrowserRouter.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">12. Route</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Route defines the relationship between a URL path and a React
              component.
            </p>

            <p>
              When a user navigates to a specific path, the corresponding
              component is rendered.
            </p>

            <p>
              <strong>Syntax:</strong>
            </p>

            <pre>
              <code>
                {`<Route
  path="/users"
  element={<UsersDashboard />}
/>`}
              </code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`<Route
  path="/posts"
  element={<PostsDashboard />}
/>

<Route
  path="/todos"
  element={<TodosDashboard />}
/>`}
              </code>
            </pre>

            <p>
              <strong>Important Properties:</strong>
            </p>

            <ul>
              <li>
                <strong>path</strong> → URL path.
              </li>
              <li>
                <strong>element</strong> → Component to render.
              </li>
            </ul>

            <p>
              <strong>Angular Equivalent:</strong>
            </p>

            <pre>
              <code>
                {`{
  path: 'users',
  component: UsersComponent
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">13. Outlet</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Outlet is a placeholder where nested route components are
              rendered.
            </p>

            <p>
              It allows layouts to stay visible while only the page content
              changes.
            </p>

            <p>
              <strong>Angular Equivalent:</strong>
            </p>

            <pre>
              <code>
                {`<router-outlet>
</router-outlet>`}
              </code>
            </pre>

            <p>
              <strong>React:</strong>
            </p>

            <pre>
              <code>{`<Outlet />`}</code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`function MainLayout() {
  return (
    <>
      <Header />
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
}`}
              </code>
            </pre>

            <p>
              <strong>Benefits:</strong>
            </p>

            <ul>
              <li>Keeps layout components persistent.</li>
              <li>Supports nested routing.</li>
              <li>Improves code organization.</li>
              <li>Similar to Angular router-outlet.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">14. NavLink</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              NavLink is used for navigation and automatically applies active
              styles when the route is selected.
            </p>

            <p>It is similar to Link but provides active route detection.</p>

            <p>
              <strong>Syntax:</strong>
            </p>

            <pre>
              <code>
                {`<NavLink to="/users">
  Users
</NavLink>`}
              </code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`<NavLink to="/">
  Home
</NavLink>

<NavLink to="/users">
  Users
</NavLink>

<NavLink to="/posts">
  Posts
</NavLink>`}
              </code>
            </pre>

            <p>
              <strong>Why Use NavLink?</strong>
            </p>

            <ul>
              <li>Page navigation.</li>
              <li>Active menu highlighting.</li>
              <li>Better user experience.</li>
              <li>Works seamlessly with React Router.</li>
            </ul>

            <p>
              <strong>Angular Equivalent:</strong>
            </p>

            <pre>
              <code>
                {`routerLink
routerLinkActive`}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">15. Layouts</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Layouts are reusable page structures that define common UI
              elements shared across multiple pages.
            </p>

            <p>Common examples include:</p>

            <ul>
              <li>Header</li>
              <li>Sidebar</li>
              <li>Content Area</li>
              <li>Footer</li>
            </ul>

            <p>
              <strong>Example Layout Structure:</strong>
            </p>

            <pre>
              <code>
                {`Header
Sidebar
Content Area
Footer`}
              </code>
            </pre>

            <p>
              <strong>MainLayout Example:</strong>
            </p>

            <pre>
              <code>
                {`function MainLayout() {
  return (
    <>
      <Header />

      <Sidebar />

      <Outlet />
    </>
  );
}`}
              </code>
            </pre>

            <p>
              <strong>Responsibilities:</strong>
            </p>

            <ul>
              <li>Provides common page structure.</li>
              <li>Reduces code duplication.</li>
              <li>Improves maintainability.</li>
              <li>Supports nested routing using Outlet.</li>
            </ul>

            <p>
              <strong>Common Layout Types:</strong>
            </p>

            <ul>
              <li>MainLayout</li>
              <li>AuthLayout</li>
              <li>AdminLayout</li>
              <li>DashboardLayout</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">16. Axios</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Axios is a Promise-based HTTP Client used to communicate with
              APIs.
            </p>

            <p>
              It is commonly used to perform GET, POST, PUT, PATCH, and DELETE
              requests.
            </p>

            <p>
              <strong>Install:</strong>
            </p>

            <pre>
              <code>{`npm install axios`}</code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`import axios from 'axios';

axios.get('/users')
  .then(response => {
    console.log(response.data);
  });`}
              </code>
            </pre>

            <p>
              <strong>Benefits:</strong>
            </p>

            <ul>
              <li>Easy API Integration.</li>
              <li>Supports Async/Await.</li>
              <li>Request & Response Interceptors.</li>
              <li>Automatic JSON Parsing.</li>
              <li>Error Handling.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">17. API Instance</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              An API Instance is a common Axios configuration shared across the
              application.
            </p>

            <p>
              <strong>api.js</strong>
            </p>

            <pre>
              <code>
                {`import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export default api;`}
              </code>
            </pre>

            <p>
              <strong>Benefits:</strong>
            </p>

            <ul>
              <li>Centralized Configuration.</li>
              <li>Easy Maintenance.</li>
              <li>Common Headers.</li>
              <li>Authorization Token Management.</li>
              <li>Request & Response Interceptors.</li>
              <li>Reusable Across Services.</li>
            </ul>

            <p>
              <strong>Real-Time Example:</strong>
            </p>

            <pre>
              <code>
                {`api.get('/users');
api.get('/posts');
api.get('/todos');`}
              </code>
            </pre>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">18. Services</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Services contain API-related logic and help separate business
              logic from UI components.
            </p>

            <p>
              <strong>Folder Structure:</strong>
            </p>

            <pre>
              <code>
                {`services
│
├── api.js
├── user.service.js
├── post.service.js
└── todo.service.js`}
              </code>
            </pre>

            <p>
              <strong>User Service:</strong>
            </p>

            <pre>
              <code>
                {`import api from './api';

export const getUsers = () => {
  return api.get('/users');
};`}
              </code>
            </pre>

            <p>
              <strong>Post Service:</strong>
            </p>

            <pre>
              <code>
                {`import api from './api';

export const getPosts = () => {
  return api.get('/posts');
};`}
              </code>
            </pre>

            <p>
              <strong>Todo Service:</strong>
            </p>

            <pre>
              <code>
                {`import api from './api';

export const getTodos = () => {
  return api.get('/todos');
};`}
              </code>
            </pre>

            <p>
              <strong>Benefits:</strong>
            </p>

            <ul>
              <li>Code Reusability.</li>
              <li>Separation of Concerns.</li>
              <li>Easy Maintenance.</li>
              <li>Cleaner Components.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">19. API Integration Flow</h4>

          <div className="section-body">
            <p>
              <strong>Complete Flow:</strong>
            </p>

            <pre>
              <code>
                {`Component
    ↓
useEffect()
    ↓
Service Function
    ↓
Axios Instance
    ↓
API Request
    ↓
Response
    ↓
State Update
    ↓
Component Re-render
    ↓
Updated UI`}
              </code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`const [users, setUsers] = useState([]);

useEffect(() => {
  loadUsers();
}, []);

const loadUsers = async () => {

  const response = await getUsers();

  setUsers(response.data);
};`}
              </code>
            </pre>

            <p>
              <strong>Understanding the Flow:</strong>
            </p>

            <ul>
              <li>Component Loads.</li>
              <li>useEffect Executes.</li>
              <li>Service Function Called.</li>
              <li>Axios Sends Request.</li>
              <li>API Returns Data.</li>
              <li>State Gets Updated.</li>
              <li>UI Re-renders Automatically.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">20. Rendering Data</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Rendering Data means displaying dynamic data on the UI using
              JavaScript methods such as map().
            </p>

            <p>
              <strong>List Rendering:</strong>
            </p>

            <pre>
              <code>
                {`users.map(user => (
  <div key={user.id}>
    {user.name}
  </div>
))`}
              </code>
            </pre>

            <p>
              <strong>Angular Equivalent:</strong>
            </p>

            <pre>
              <code>{`*ngFor="let user of users"`}</code>
            </pre>

            <p>
              <strong>Why key is Important?</strong>
            </p>

            <pre>
              <code>{`key={user.id}`}</code>
            </pre>

            <p>
              React uses key to efficiently identify and update elements in the
              Virtual DOM.
            </p>

            <p>
              <strong>Benefits:</strong>
            </p>

            <ul>
              <li>Efficient DOM Updates.</li>
              <li>Better Performance.</li>
              <li>Prevents Rendering Issues.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">21. Conditional Rendering</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Conditional Rendering allows components to render UI based on
              specific conditions.
            </p>

            <p>
              <strong>Loading State:</strong>
            </p>

            <pre>
              <code>
                {`if (loading) {
  return <h2>Loading...</h2>;
}`}
              </code>
            </pre>

            <p>
              <strong>Error State:</strong>
            </p>

            <pre>
              <code>
                {`if (error) {
  return <h2>{error}</h2>;
}`}
              </code>
            </pre>

            <p>
              <strong>Short Circuit Example:</strong>
            </p>

            <pre>
              <code>{`{loading && <p>Loading...</p>}`}</code>
            </pre>

            <p>
              <strong>Common Use Cases:</strong>
            </p>

            <ul>
              <li>Loading Spinner.</li>
              <li>Error Messages.</li>
              <li>Authentication Checks.</li>
              <li>Show/Hide Elements.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">22. Tailwind CSS Setup</h4>

          <div className="section-body">
            <p>
              <strong>Definition:</strong>
              <br />
              Tailwind CSS is a utility-first CSS framework used to rapidly
              build modern responsive user interfaces.
            </p>

            <p>
              <strong>Install:</strong>
            </p>

            <pre>
              <code>{`npm install tailwindcss @tailwindcss/vite`}</code>
            </pre>

            <p>
              <strong>vite.config.js</strong>
            </p>

            <pre>
              <code>
                {`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
});`}
              </code>
            </pre>

            <p>
              <strong>index.css</strong>
            </p>

            <pre>
              <code>{`@import "tailwindcss";`}</code>
            </pre>

            <p>
              <strong>Example:</strong>
            </p>

            <pre>
              <code>
                {`<button className="bg-blue-600 text-white px-4 py-2 rounded">
  Save
</button>`}
              </code>
            </pre>

            <p>
              <strong>Advantages:</strong>
            </p>

            <ul>
              <li>Fast UI Development.</li>
              <li>Responsive Design.</li>
              <li>Reusable Utility Classes.</li>
              <li>Minimal Custom CSS.</li>
              <li>Excellent React Integration.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="section-heading">23. Commands Used So Far</h4>

          <div className="section-body">
            <p>
              <b>Create React Project</b> <br />
              npm create vite@latest react-dashboard -- --template react <br />
              <b>Install Dependencies</b> <br />
              npm install <br />
              <b>Run Application</b> <br />
              npm run dev <br />
              <b>Install Routing</b> <br />
              npm install react-router-dom <br />
              <b>Install Axios</b> <br />
              npm install axios <br />
              <b>Install Tailwind CSS</b> <br />
              npm install tailwindcss @tailwindcss/vite
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDashboard;
