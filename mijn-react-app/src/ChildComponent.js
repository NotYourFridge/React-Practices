

const ChildComponent = ({ parentState, onChildClick }) => {
  const handleChildClick = () => {
    // Gebruik de callback om de staat van de oudercomponent te wijzigen
    onChildClick();
  };

  return (
    <div>
      <p>Parent State received in Child: {parentState}</p>
      <button onClick={handleChildClick}>Update Parent State</button>
    </div>
  );
};

export default ChildComponent;
