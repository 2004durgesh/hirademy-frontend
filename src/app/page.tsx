import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="p-8 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Book Treasure</h1>
          <p className="text-lg md:text-xl mb-8 text-secondary-foreground">Explore a world of knowledge with our vast collection of books.</p>
        </div>
        <Image src="/Group1.png" width={516.5} height={391.5} alt="the book store" className="" />
      </div>
    </main>
  );
}
