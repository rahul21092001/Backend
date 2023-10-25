import { debounce, throttle } from "lodash";

const Throttling = () => {
  const handleChange = () => {
    console.log("api call...");
  };

  const handleMouseMove = () => {
    console.log("api call to do some operations...");
  };

  window.addEventListener("mousemove", throttle(handleMouseMove, 1000));

  return (
    <div>
      <p className="font-bold "> (2)Whenever you search in below input box</p>
      <p className="font-bold ">the api will call after some delay</p>
      <input
        type="text"
        placeholder="Search for something"
        onChange={debounce(handleChange, 500)}
        className="border-black bg-blue-100  "
      />
      <br/>
      <br/>
    </div>
  );
};

export default Throttling;
