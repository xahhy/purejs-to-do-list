import React, {Component} from 'react';
import ActionButtonsContainer from "./container/ActionButtonsContainer";
import ToDoListContainer from "./container/ToDoListContainer";
import BarChartContainer from "./container/BarChartContainer";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ActionButtonsContainer/>
                <ToDoListContainer/>
                <BarChartContainer/>
            </div>
        )
    }

}

export default App;
