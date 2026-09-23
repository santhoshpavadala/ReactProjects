function ReactPropsChild({ name, role, experience }) {
    return(
        <>
        <div>
            <h4>{name}</h4>
            <p>{role}</p>
            <p>{experience} years</p>
        </div>
        </>
    )
}

export default ReactPropsChild;