import CoolCard from "@/components/CoolCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen justify-evenly p-24">
      <div className="flex flex-row gap-5 ">
        <CoolCard
          title="Card 1"
          text="Some text in card 1 Some text in card 1 Some text in card 1 Some text in card 1"
        />

        <CoolCard
          title="Card 2"
          text="Some other text in card 2 Even more text Some other text in card 2 Some other text in card 2"
        />
      </div>
    </main>
  );
}
