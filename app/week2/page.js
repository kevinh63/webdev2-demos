import EventList from "./event-list";   {/* this is importing  the function 'EventList' from ./event-list.js script */}
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Community Event Planner</h1>
      <EventList />          {/* this is importing EventList */}
      <div>
        <h2>Current Weather</h2>
        <p>Temperature: 15°C</p>
        <p>
          <Link href="https://www.theweathernetwork.com/ca/weather/alberta/calgary">
            Weather forecast Calgary
          </Link>
        </p>
        <p>
          <Link href="../">Home</Link>   {/* the '../' means that we are going back one directory, or back to our main page (page.js) */}
          {/* The advantage over using <a> is that Link provides prefetching and client-side navigation. */}
        </p>
      </div>
    </main>
  );
}
