'use client'
import RaceCard from "@/components/RaceCard/RaceCard";
import { Race } from "@/types/race.types";
import { useEffect, useState } from "react";

interface RaceDetails {

  params: {
    raceDetails: string
  }
}

export default function RaceDetails({ params: { raceDetails } }: RaceDetails) {
  const [race, setRace] = useState<Race | null>()
  
  useEffect(() => {
    const fetchRace = async () => {
      const res = await fetch(`/api/races/${raceDetails}`);
      const json = await res.json();

      setRace(json)  
    }
    
    fetchRace()
  }, [])

  if (!race) return null

  return (
    <main>
        <RaceCard race={race} key={race!.id}/>
    </main>
  );
}
