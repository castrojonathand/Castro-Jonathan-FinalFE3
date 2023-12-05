import { useGlobalContext } from "./utils/global.context";

export const Pagination = ({
  currentPage,
  cardsPerPage,
  setCurrentPage,
  totalCards,
}) => {
  const { dataState} = useGlobalContext();
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const maxPagesToShow = 1; // esta constante decide cuantas paginas se renderizaran antes y despues de la pagina seleccionada, ajuste la constante a sus necesidades o conveniencia.

  let startPage = Math.max(currentPage - maxPagesToShow, 1);

  let endPage = Math.min(currentPage + maxPagesToShow, totalPages); 

  if (totalPages > maxPagesToShow * 2) {
    if (currentPage <= maxPagesToShow) {
      endPage = maxPagesToShow * 2 + 1;
    } else if (currentPage >= totalPages - maxPagesToShow) {
      startPage = totalPages - maxPagesToShow * 2;
    }
  }

  const pageNumber = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumber.push(i);
  }

  function Next() {
    setCurrentPage(currentPage + 1);
  }

  function Back() {
    setCurrentPage(currentPage - 1);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg font-[Poppins] flex items-center">
        <button
          onClick={Back}
          className={
            dataState.theme
              ? `h-12 border-2 border-r-0  px-4 rounded-l-lg border-primary hover:bg-primary hover:opacity-60 hover:text-white ${
                  currentPage === 1 ? "cursor-not-allowed opacity-30" : ""
                }`
              : `h-12 border-2 border-r-0 border-black px-4 rounded-l-lg hover:bg-gray-600 hover:opacity-80 hover:text-black ${
                  currentPage === 1 ? "border-black cursor-not-allowed" : ""
                }`
          }
          disabled={currentPage === 1}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        {pageNumber.map((pg, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(pg)}
            id="pageNumber"
            className={
              dataState.theme
                ? `h-12 w-12 border-2 border-r-0 border-primary hover:bg-primary hover:opacity-60 hover:text-white ${
                    currentPage === pg && "bg-primary"
                  }`
                : `h-12 w-12 border-2 border-r-0 border-black hover:bg-gray-600 hover:opacity-80 hover:text-black ${
                    currentPage === pg &&
                    "!bg-black opacity-95 border-r-2 hover:text-white"
                  }`
            }
          >
            {pg}
          </button>
        ))}

        <button
          onClick={Next}
          className={
            dataState.theme
              ? `h-12 border-2 px-4 rounded-r-lg border-primary hover:bg-primary hover:opacity-60 hover:text-white ${
                  currentPage >= totalPages
                    ? "border-black cursor-not-allowed opacity-30 border-l-0"
                    : ""
                }`
              : `h-12 border-2  px-4 rounded-r-lg border-black hover:bg-gray-600 hover:opacity-80 hover:text-black ${
                  currentPage >= totalPages
                    ? "border-black cursor-not-allowed border-l-2 hover:bg-black"
                    : ""
                }`
          }
          disabled={currentPage >= totalPages}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        <br />
      </div>
      {totalPages > 3 && <p className="h-12 mt-2">Total pages: {totalPages}</p>}
    </div>
  );
};
