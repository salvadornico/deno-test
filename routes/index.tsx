import { Head } from "$fresh/runtime.ts";
import Countdown from "../islands/Countdown.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 1);
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>

      <div class="p-4 mx-auto max-w-screen-md">
        <p>
          The big event is happening <Countdown target={date.toISOString()} />.
        </p>
      </div>
    </>
  );
}
