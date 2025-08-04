import RoomType from "@/component/RoomType";
import Link from "next/link";

async function getData(page_no = 1) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/room-type?page=${page_no}`, {cache: 'no-store'});
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error fetching room types:', error);
    return { 
      count: 0,
      results: [],
      previous: null,
      next: null
    };
  }
}

export default async function Page({ searchParams }) {
  const page = searchParams?.page || 1;
  const roomTypes = await getData(page);
  const links = [];
  const nextPage = parseInt(page) + 1;
  const prevPage = parseInt(page) - 1;

  // Generate pagination links
  if (roomTypes.previous) {
    links.push(
      <li key="prev" className="page-item">
        <Link className="page-link" href={`/room_type?page=${prevPage}`}>
          Previous
        </Link>
      </li>
    );
  }

  // Calculate total pages
  // const totalPages = Math.ceil(roomTypes.count / (roomTypes.results?.length || 3));
  
  // Generate page number links
  for (let i = 1; i < (roomTypes.count-1); i++) {
    links.push(
      <li key={i} className="page-item">
        <Link 
          className={`page-link ${parseInt(page) === i ? 'active' : ''}`}
          href={`/room_type?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

  if (roomTypes.next) {
    links.push(
      <li key="next" className="page-item">
        <Link className="page-link" href={`/room_type?page=${nextPage}`}>
          Next
        </Link>
      </li>
    );
  }

  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Room Types ({roomTypes.count})</h1>
        <div className="row text-center">
          {roomTypes.results?.length > 0 ? (
            roomTypes.results.map((item, index) => (
              <RoomType item={item} key={index} />
            ))
          ) : (
            <div className="col-12">No room types found</div>
          )}
        </div>
        
        {links.length > 0 && (
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {links}
            </ul>
          </nav>
        )}
      </div>
    </main>
  );
}