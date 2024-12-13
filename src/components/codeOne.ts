import React from "react";

// const Greeting = ({ name }) => {
//   return <div>Hello, {name}!</div>;
// };

// export default Greeting;


//Define type for props object
interface GreetingProps {
  name: string;
}

//Functional componet with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return 
  <div>Hello, {name}!  </div>;
};

export default Greeting;