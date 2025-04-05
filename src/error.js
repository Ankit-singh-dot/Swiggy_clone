import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <img
        src="https://i.imgflip.com/8s7ktm.jpg"
      ></img>
      <h2 className="font-bold ml-4 text-xl"></h2>
    </div>
  );
};
export default Error;
