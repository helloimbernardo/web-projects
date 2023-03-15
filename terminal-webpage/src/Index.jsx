import Window from "./Window";
import Draggable, { DraggableCore } from "react-draggable";

function selectWallpaper() {
  let names = [
    "backpack",
    "louvre",
    "malaga",
    "parismetro1",
    "parismetro2",
    "vienna",
  ];
  return `bg-${names[Math.floor(Math.random() * names.length)]}`;
}

function Index() {
  return (
    <div
      className={`min-h-screen min-w-full grid place-items-center bg ${selectWallpaper()}`}
    >
      <Draggable bounds="parent">
        <div className="w-4/5 xl:w-2/5">
          <Window windowName="Terminal">
            <span className="p-4">
              <p className="ml-2 font-mono pb-2">
                <span className="text-green-400">bernardo@helloimbernardo</span>
                <span className="text-gray-400">:~$</span>{" "}
                <span className="text-white"> init</span>
              </p>
              <br />
              <p className="ml-2 font-mono text-white pb-2">
                Hello, I'm <b>bernardo</b>
              </p>
              <p className="ml-2 font-mono text-white pb-2">
                A 19 year old student from Portugal
              </p>
              <p className="ml-2 font-mono text-white pb-2">
                I make random fun things in my free time and some of them are on
                the internet at
                <a
                  href="https://github.com/helloimbernardo"
                  className="text-orange-500"
                >
                  <b> github.com/helloimbernardo</b>
                </a>
              </p>
              <p className="ml-2 font-mono text-white pb-2">
                This page is <a href="https://github.com/helloimbernardo/web-projects/tree/main/terminal-webpage"><b>Open Source</b></a>
              </p>
            </span>
          </Window>
        </div>
      </Draggable>
    </div>
  );
}

export default Index;
