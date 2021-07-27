const Title = (props) => {
  return (
    <>
      <h2 style={{fontSize: '24px'}}>{props.h2}</h2>
      <p style={{fontSize: '14px', fontWeight: '500', color: 'var(--gray-700)'}}>{props.p}</p>
    </>
  );
};

export default Title;