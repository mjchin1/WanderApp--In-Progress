import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav className="navBar">
            <Link to = '/'>Home</Link>
            {/* <Link to = '/activities'>Activities</Link> */}
            {/* <Link to = '/arrivals'>Arrivals</Link> */}
            {/* <Link to = '/departures'>Departures</Link> */}
            <Link to = '/trips'>My Trips</Link>
            {/* <Link to = '/add-arrival'>Arrival Form</Link>
            <Link to = '/add-departure'>Departure Form</Link> */}
            {/* <Link to = '/place-search2'>Search2</Link> */}
            {/* <Link to = '/place-search'>Search</Link>
            <Link to = '/add-activity'>Activity Form</Link> */}
            {/* <Link to = '/place-photo'>Photo</Link>
            <Link to = '/place-photo2'>Photo2</Link> */}
            {/* <Link to = '/add-activity'>Activity Form</Link> */}
            {/* <Link to = '/add-trip'>Add Trip Form</Link> */}
            {/* <Link to = '/destinations'>Destinations</Link> */}
            {/* <Link to = '/trip/:id'>Single Trip</Link> */}
            {/* <Link to = '/activity-types'>Activity Types</Link> */}

        </nav>
    );
};