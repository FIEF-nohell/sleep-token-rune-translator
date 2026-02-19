import { AlphabetGrid } from "@/components/AlphabetGrid";

export default function AlphabetPage() {
  return (
    <div className="page-column">
      <h1 className="page-title">Rune Alphabet</h1>
      <section className="picker-block" aria-label="Alphabet mapping">
        <AlphabetGrid />
      </section>
    </div>
  );
}
