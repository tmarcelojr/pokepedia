import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'

const PokemonList = ({ pokeList, itemsPerPage }) => {
    console.log('props', pokeList)
    // We start with an empty list of pokeList.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch pokeList from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading pokeList from ${itemOffset} to ${endOffset}`);
        setCurrentItems(pokeList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(pokeList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const Items = ({ currentItems }) => {
        return (
          <>
            {currentItems &&
              currentItems.map((item) => (
                <div>
                  <h3>Item #{item}</h3>
                </div>
              ))}
          </>
        );
      }

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % pokeList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default PokemonList;
