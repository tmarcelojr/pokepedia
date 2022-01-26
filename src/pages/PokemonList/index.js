import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'
import axios from 'axios'

const PokemonList = ({ pokeList, itemsPerPage }) => {
    // console.log('props', pokeList)
    // We start with an empty list of pokeList.
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch pokeList from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading pokeList from ${itemOffset} to ${endOffset}`);
        setCurrentPokemon(pokeList.slice(itemOffset, endOffset));

        // We need to make a conditional so our currPagePokemon doesn't get invoked unless we have data to work with
        if(currentPokemon) currPagePokemon()

        setPageCount(Math.ceil(pokeList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const currPagePokemon = () => {
        currentPokemon.forEach( async (pokemon) => {
            try {

            } catch (error) {

            }
        })
    }

    const Pokemon = () => {
        return (
            <>
                {
                    pokeList &&
                    pokeList.map(pokemon => (
                        <div>
                            {/* <h3>{pokemon.name}</h3> */}
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

    console.log('current pokemon', currentPokemon)

    return (
        <div>
            <Pokemon />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
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
