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
  const elem = <a href="https://www.google.com">Go to Google</a>
  const imgurl = 'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png';
  const img = <img width="100px" src="https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png" alt="image"></img>
  return (
    <div className="Tutorial">
      <h1> React JS</h1>
      <button className='btn btn-lg btn-primary'> Submit </button>
      <h3>Tutorial</h3>
      <p>This is JSX expression {x*2} , weclcome {user.name}, fullname = {getUserFullName()} </p>
      <p>{elem} {img}</p>
    </div>
  );
}

export default Tutorial;
