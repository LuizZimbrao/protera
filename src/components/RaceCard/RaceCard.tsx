import Image from "next/image";

import { Race } from "@/types/race.types";

import Eye from "@/svgs/Eye";

import styles from "./race.module.css";

export default function RaceCard({ race }: { race: Race }) {
  return (
    <div className={styles["racecard-wrapper"]} key={race.id}>
      <div className={styles["racecard-image-container"]}>
        <Image
          src={`/races/${race.name.toLowerCase()}.png`}
          width={360}
          height={180}
          alt={race.name}
        />
        <Eye />
      </div>

      <div className={styles["racecard-content"]}>
        <h1 className={styles["racecard-content-name"]}>{race.name}</h1>
      </div>
    </div>
  );
}
