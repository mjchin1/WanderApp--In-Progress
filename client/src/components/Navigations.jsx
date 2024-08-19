import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>Home</Link>
            <Link to = '/activities'>Activities</Link>
            <Link to = '/arrivals'>Arrivals</Link>
            <Link to = '/departures'>Departures</Link>
            <Link to = '/add-arrival'>Arrival Form</Link>
        </nav>
    );
};