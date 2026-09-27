import Button from "../components/button";
import Card from "../components/card";


function ReactPropsChild({
  name,
  role,
  experience,
  isActive,
  skills = [],
  user={},
  onDelete,
  onMessage,
  users = []
}) {
  return (
    <div>

      {/* String */}
      <h6>{name}</h6>

      {/* String */}
      <p>Role: {role}</p>

      {/* Number */}
      <p>Experience: {experience} years</p>

      {/* Boolean */}
      <p>
        Status: {isActive ? "Active" : "Inactive"}
      </p>

      {/* Array */}
      <h6>Skills:</h6>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
          </li>
        ))}
      </ul>

      {/* Object */}
      <h6>User Details:</h6>

      <p>User ID: {user.id}</p>
      <p>User Name: {user.name}</p>

      {/* Function */}
      {/* <button onClick={onDelete}>
        Delete
      </button> */}

      <Button onClick={onDelete} variant="danger">Delete</Button>

       <Button variant="success" onClick={() => onMessage("Hello Parent")}>
          Send Message
        </Button>

        <div>
          {users.map((user) => (
            <Card
              key={user.id}
              user={user}
            />
          ))}
        </div>

    </div>
  );
}

export default ReactPropsChild;