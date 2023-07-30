// src/components/Stats.tsx
import React, { useEffect, useState } from 'react';

interface StatsProps {
  userId: string; // Replace 'string' with the actual type of user ID
}

const Stats: React.FC<StatsProps> = ({ userId }) => {
  const [completedGames, setCompletedGames] = useState<number>(0);

  // Fetch user stats from the backend and set the state on component mount
  useEffect(() => {
    fetchUserStats();
  }, []);

  const fetchUserStats = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`); // Assuming you pass the userId to this component
      const data = await response.json();
      setCompletedGames(data.completedGames);
    } catch (error) {
      console.error('Error fetching user stats:', error.message);
    }
  };

  return (
    <div>
      {/* Render the user stats UI here */}
      <h2>User Stats</h2>
      <p>Completed Games: {completedGames}</p>
    </div>
  );
};

export default Stats;
