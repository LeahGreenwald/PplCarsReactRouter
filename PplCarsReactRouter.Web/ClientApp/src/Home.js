import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PersonRow from './PersonRow';
import 'bootstrap/dist/css/bootstrap.css';

class PeopleTable extends React.Component {
    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        car: {
            personId: '',
            make: '',
            model: '',
            year: ''
        }
    }

    componentDidMount = async () => {
        await this.fillTable();
    }

    fillTable = async () => {
        const { data } = await axios.get('/api/PeopleCars/getall');
        this.setState({ people: data });
    }


    render() {
        const { people } = this.state;
        return (
            <>
                <Link to={'/addPerson'}>
                    <button className='btn btn-primary'>Add Person</button>
                </Link>

                <table>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Age</th>
                            <th>Car count</th>
                            <th>Add car</th>
                            <th>Delete cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!people.length && people.map(p => <PersonRow person={p} key={p.id} />)}
                    </tbody>
                </table>


            </>
        );
    }
}

export default PeopleTable;