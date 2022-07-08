var x = 10;
const user = {
  firstName: 'Saikat',
  lastName: 'Mahapatra',
  age: 34
};
function getUserFullName(){
  return user.firstName + ' ' + user.lastName;
}

function Tutorial() {
  return (
    <div className="Tutorial">
      <h1> React JS</h1>
      <button className='btn btn-lg btn-primary'> Submit </button>
      <h3>Tutorial</h3>
      <p>This is JSX expression {x*2} , weclcome {user.name}, fullname = {getUserFullName()} </p>
    </div>
  );
}

export default Tutorial;
