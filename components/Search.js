
export default function Search({ search, setSearch }) {

    return (
        <div className='search-container'>
            <input className="search-box" id='search-ken'
            type='text' 
            placeholder="Search posts, author, tags.." 
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}