import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingPage } from '../../redux/sorting-slice';
import { setCurrentPage } from '../../redux/article-slice';
import { fetchArticlesWithSorting } from '../../redux/sorting-slice-fetching';

function CataloguePagination() {
  const dispatch = useAppDispatch();
  const { totalDocuments, currentPage } = useAppSelector(store => store.articles);
  const { pathname } = useLocation()

  const onPageClick = (inc: number) => {
    dispatch(setSortingPage(inc));
    dispatch(setCurrentPage(inc + 1));
    dispatch(fetchArticlesWithSorting());
  }

  const isIntroPage = (pathname === "/");
  const TOTALPAGES = Math.ceil(totalDocuments / 9);

  return (
    <>
      {!isIntroPage && <>
        <div className="catalogue__buttons">
          <div className="catalogue__pagination">

            {currentPage !== 1 && <>
              <span
                onClick={onPageClick.bind(null, currentPage - 2)}
                className="catalogue__pagination-prev catalogue__pagination-circle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                  <path d="M8.5 1L1 8.5L8.5 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </>}

            {new Array(TOTALPAGES).fill("").map((_, index) => {
              const pageToShow = index + 1;

              if (TOTALPAGES === 1) return null;

              return (
                <Link
                  key={index}
                  to="/catalogue"
                  className={pageToShow === currentPage ? "active" : ""}
                  onClick={onPageClick.bind(null, index)}
                >
                  {pageToShow}
                </Link>
              )
            })}

            {currentPage !== TOTALPAGES && <>
              <span
                onClick={onPageClick.bind(null, currentPage)}
                className="catalogue__pagination-next catalogue__pagination-circle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                  <path d="M1 1L8.5 8.5L1 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </>}
          </div>
        </div>
      </>}

      {isIntroPage && <>
        <div className="catalogue__buttons">
          <Link className='btn-dark' to="/catalogue">Показать больше</Link>
        </div>
      </>}
    </>
  )
}

export { CataloguePagination }