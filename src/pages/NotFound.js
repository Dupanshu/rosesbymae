import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="cntr">
        <h1>Sorry....<span>This page doesn't exist.</span></h1>
        <Link to='/'>
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

