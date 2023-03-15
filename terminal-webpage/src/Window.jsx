function Window(props) {
  return (
    <div className="w-full shadow-2xl subpixel-antialiased rounded bg-black border-black">
      
      <div className="flex items-center rounded-t text-center bg-white cursor-move">
        <div className="flex rounded-full bg-green-500 w-3 h-3 ml-1" ></div>
        <div className="flex rounded-full bg-yellow-400 w-3 h-3 ml-1" ></div>
        <div className="flex rounded-full bg-red-500 w-3 h-3 ml-1" ></div>
        <div className="mx-auto text-lg">
          {props.windowName}
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default Window
