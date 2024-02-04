import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full flex justify-center items-center mt-60">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor="#002fff"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
