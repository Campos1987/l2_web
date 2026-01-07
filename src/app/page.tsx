import AboutServer from "./home/AboutServer";
import EventServer from "./home/EventServer";
import Hero from "./home/hero";
import News from "./home/News";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventServer />
      <AboutServer />
      <News />
    </main>
  );
}
