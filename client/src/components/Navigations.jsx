import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav className="navBar">
            <Link to = '/'>Home</Link>
            {/* <Link to = '/activities'>Activities</Link>
            <Link to = '/arrivals'>Arrivals</Link>
            <Link to = '/departures'>Departures</Link>
            <Link to = '/add-arrival'>Arrival Form</Link>
            <Link to = '/add-departure'>Departure Form</Link>
            <Link to = '/add-activity'>Activity Form</Link>
            <Link to = '/add-trip'>Add Trip Form</Link>
            <Link to = '/destinations'>Destinations</Link>
            <Link to = '/trip/:id'>Single Trip</Link>
            <Link to = '/activity-types'>Activity Types</Link> */}

        </nav>
    );
};