import { RotatingLines } from "react-loader-spinner";

function LoaderSearch() {
  return (
    <div className="w-full flex justify-center items-center z-50">
      <RotatingLines
        visible={true}
        height="44"
        width="44"
        strokeColor="#ffffff"
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

export default LoaderSearch;
