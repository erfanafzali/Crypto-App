function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  return (
    <div
      className="text-white py-12 flex justify-center items-center gap-x-5 mx-auto  md:max-w-[1000px] px-5 pl-80 md:pl-0 sm:pl-20">
      <button
        className={`border px-1 py-0.5 md:px-2 md:pb-1  text-sm md:text-base rounded-lg bg-blue-700 font-semibold ${
          page <= 1 ? "opacity-[0.5] cursor-not-allowed" : ""
        }`}
        onClick={previousHandler}>
        previous
      </button>
      <p
        className={`${
          page === 1
            ? "bg-blue-700 text-white border px-2 rounded-lg"
            : "border px-2 rounded-lg"
        }`}>
        1
      </p>
      <p
        className={`${
          page === 2
            ? "bg-blue-700 text-white border px-2 rounded-lg"
            : "border px-2 rounded-lg"
        }`}>
        2
      </p>
      <p>
        {page > 2 && page < 9 && (
          <div className="flex justify-center items-center gap-x-5">
            <span>...</span>
            <p
              className={`${
                page
                  ? "bg-blue-700 text-white border px-2 rounded-lg"
                  : "border px-2 rounded-lg"
              }`}>
              {page}
            </p>
          </div>
        )}
      </p>
      <p>...</p>
      <p
        className={`${
          page === 9
            ? "bg-blue-700 text-white border px-2 rounded-lg"
            : "border px-2 rounded-lg"
        }`}>
        9
      </p>
      <p
        className={`${
          page === 10
            ? "bg-blue-700 text-white border px-2 rounded-lg"
            : "border px-2 rounded-lg"
        }`}>
        10
      </p>
      <button
        className={`border  px-1 py-0.5 md:px-2 md:pb-1  text-sm md:text-base rounded-lg bg-blue-700 font-semibold ${
          page >= 10 ? "opacity-[0.5] cursor-not-allowed" : ""
        }`}
        onClick={nextHandler}>
        next
      </button>
    </div>
  );
}

export default Pagination;
