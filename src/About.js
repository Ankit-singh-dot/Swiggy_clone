// import User from "./user";
import UserClass from "./UserClass.js";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Say my name </h2>
      <UserClass class={"this is class-based component"} />
    </div>
  );
};

export default About;
