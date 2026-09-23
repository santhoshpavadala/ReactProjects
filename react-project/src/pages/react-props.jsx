import ReactPropsChild from '../pages/react-props-child';

function ReactProps() {
  return (
    <>
      <h2 className="page-title">Section 3 — React Props</h2>
      <div className="section">
        <div className="sub-section">
          <div className="section-body">
          <h4 className="section-heading">React Props</h4>
            <div className="section-content">
                <h4 className="section-subheading">3.1 What are Props?</h4>
                <p>Props are read-only inputs passed from a parent component to a child component.</p>
                <p>This is the parent component and im passing inputs to child component as 'ReactPropsChild'</p>
                <ReactPropsChild name="Santhosh Pavadala" role="Frontend Developer" experience={4.10}></ReactPropsChild>
            </div>

            <div className="section-content">
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactProps;
