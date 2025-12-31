import { LevelContext } from "../contexts/LevelContext";

export default function Section({ level, children }) {
    return (
      <section className="context-section">
        <LevelContext value={level}>
        {children}
        </LevelContext>
      </section>
    );
  }
  