import {Outlet, Link} from 'react-router-dom';

export function LandingPageScalability() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Scalability</h2>
      <nav>
      <Link to="/testing">Testing</Link>
      <Link to="/second">Testing</Link>
     </nav>
     <Outlet />
    </main>
  );
}
