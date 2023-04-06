import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h3>Never miss a note!</h3>
      <br />
      <Link href="/notes"> View Notes </Link>
    </section>
  );
}
