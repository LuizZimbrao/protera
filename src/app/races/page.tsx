"use client"
import { useEffect, useState } from "react";
import { Race } from "@/types/race.types";
import RaceCard from "@/components/RaceCard/RaceCard";
import Link from "next/link";

export default function Races() {
  const [races, setRaces] = useState<Race[] | []>([])
  const [selectedRace, setSelectedRace] = useState<Race>()

  useEffect(() => {
    const fetchRaces = async () => {
      const res = await fetch(`/api/races`);
      const json = await res.json();

      console.log(json);

      setRaces(json)  
    }
    
    fetchRaces()
  }, [])

  function handleSelectRace(raceName: string) {
    const filteredRace = races.find((race) => race.name === raceName)
    
    setSelectedRace(filteredRace)
  }

  return (
    <main>
      <div className="flex">
        {selectedRace ? (
          <Link href={`/races/${selectedRace.name.toLowerCase()}`}>
            <RaceCard race={selectedRace}/>
          </Link>
        ) : null}

        <ul className="h-100">
          {races.map((race) => (
            <li key={race.id}>
              <button onClick={() => handleSelectRace(race.name)}>{race.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
