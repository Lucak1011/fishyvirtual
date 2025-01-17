import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary
import { useEffect, useState } from 'react';

const Fleet = () => {
  const [fleetData, setFleetData] = useState([]);

  useEffect(() => {
    const fetchFleetData = async () => {
      try {
        const response = await fetch('/data/fleetData.json'); // Adjust the path if needed
        const data = await response.json();
        setFleetData(data);
      } catch (error) {
        console.error('Error fetching fleet data:', error);
      }
    };

    fetchFleetData();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Fleet - Virtual Airline</title>
        <meta name="description" content="Explore our fleet of Airbus A320 aircraft, each with its unique registration number." />
      </Head>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-yellow-600 mb-6">Our Fleet</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fleetData.map((aircraft) => (
            <div
              key={aircraft.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <img
                src={aircraft.imageUrl}
                alt={aircraft.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-yellow-600 mb-2">{aircraft.name}</h2>
                <p className="text-gray-700 mb-1"><strong>Type:</strong> {aircraft.type}</p>
                <p className="text-gray-700"><strong>Registration:</strong> {aircraft.registration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fleet;
