import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>Home</Link>
            <Link to = '/activities'>Activities</Link>
            <Link to = '/activity'>Activity</Link>
        </nav>
    );
};