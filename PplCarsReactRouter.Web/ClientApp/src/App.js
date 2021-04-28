import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AddPerson from './AddPerson';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';



const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/addPerson' component={AddPerson} />
            <Route exact path='/addCar/:id' component={AddCar} />
            <Route exact path='/deleteCars/:id' component={DeleteCars} />
        </Layout>
    );
}

export default App;