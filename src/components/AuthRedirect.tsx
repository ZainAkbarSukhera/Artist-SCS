import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Entering auth redirect");
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    console.log("token is: ", token);
    console.log("params is: ", params)

    if (token) {
      console.log("Saving token")
      // Save token in localStorage
      localStorage.setItem('dashboardToken', token);

      console.log("Navigating to dashboard");
      // Redirect to dashboard
      navigate('/dashboard'); // Adjust this to your main dashboard route
    } else {
      console.error("No token found in URL");
      // Optionally redirect to login or show error
      console.log("Navigating to dashboard");
      navigate('/login');
    }
  }, [location, navigate]);

  return <p>Redirecting to dashboard...</p>;
};

export default AuthRedirect;
