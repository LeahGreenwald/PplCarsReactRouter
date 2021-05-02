import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PersonRow from './PersonRow';
import 'bootstrap/dist/css/bootstrap.css';

class PeopleTable extends React.Component {
    state = {
        people: [],
        searchText: ''
    }

    componentDidMount = async () => {
        await this.fillTable();
    }

    fillTable = async () => {
        const { data } = await axios.get('/api/PeopleCars/getall');
        this.setState({ people: data });
    }

    clearSearch = () => {
        this.setState({ searchText: '' });
        this.fillTable();
    }

    searchChange = async e => {
        this.setState({ searchText: e.target.value });
        if (e.target.value.length == 0) {
            this.fillTable();
        }
        else {
            const { data } = await axios.get(`api/peopleCars/GetSearch?searchText=${e.target.value}`);
            this.setState({ people: data })
        }
    }

    render() {
        const { people } = this.state;
        return (
            <>

                <input type='text' placeholder='Search People' onChange={this.searchChange} value={this.state.searchText} />
                <button className='btn btn-success' onClick={this.clearSearch}>Clear</button>
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