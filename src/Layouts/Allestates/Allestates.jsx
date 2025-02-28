import { useLoaderData } from "react-router";

const Allestates = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="static">
      <p>
        sjddnwefndmcsmwemod34fjj Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Corrupti inventore ex fuga, eos iusto facilis velit
        voluptate repudiandae aperiam laudantium, magnam quaerat voluptatum,
        temporibus aliquid minus dignissimos nulla est nisi.
      </p>
    </div>
  );
};

export default Allestates;
