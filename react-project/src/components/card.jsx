function Card({children, user={} }) {
    return(
        <>
        <div className="card">
            {children}
            <h2>{user?.name}</h2>
            <p>{user?.role}</p>
        </div>
        </>
    )
}

export default Card;