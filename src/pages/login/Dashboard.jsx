import useLocation from 'react-router-dom';

function Dashboard() {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <p>Hi, {location.state.id} Welcome to the admin dashboard!</p>
      </div>
    </div>
  );
}

export default Dashboard;