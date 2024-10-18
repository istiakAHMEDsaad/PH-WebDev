import './index.css';
import { useState } from 'react';

export default function Team() {
  const [player, setTeam] = useState(11);

  const handleAddMember = () => {
    const countNum = player + 1;
    setTeam(countNum);
  };

  const handleRemoveMember = () => {
    if (player > 11) {
      const newPlayer = player - 1;
      setTeam(newPlayer);
    } else if (player <= 11) {
      const newPlayer = player - 0;
      setTeam(newPlayer);
      
    }
  };
  return (
    <>
      <div className="my-4 border-2 rounded-md p-5 space-y-2">
        <h2 className="text-center text-3xl text-cyan-500">
          Player: <span>{player}</span>
        </h2>
        <div className="flex justify-center space-x-5">
          <button
            className="border border-purple-500 rounded-md p-3 hover:bg-purple-500 transition-all text-xl"
            onClick={handleAddMember}
          >
            Add player
          </button>

          <button
            className="border border-purple-500 rounded-md p-3 hover:bg-purple-500 transition-all text-xl"
            onClick={handleRemoveMember}
          >
            Remove player
          </button>
        </div>
      </div>
    </>
  );
}
