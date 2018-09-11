import React, {Component} from 'react';
import ActionButtons from "./container/ActionButtons";
import ToDoList from "./components/ToDoList";
import BarChart from "./components/BarChart";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ActionButtons/>
                {/*<ToDoList/>*/}
                {/*<BarChart/>*/}
            </div>
        )
    }

}

export default App;
