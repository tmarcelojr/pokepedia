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

    const Pokemon = () => {
        return (
            <>
                {
                    pokeList &&
                    pokeList.map(pokemon => (
                        <div>
                            <h3>{pokemon.name}</h3>
                        </div>
                    ))
                }
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
            <Pokemon />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default PokemonList;
