import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../../../utils';
import {isValidDate} from '../../../utils';

class Advanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {startDate: null, endDate: null};
    }

    handleChangeStartDate = (event) => {
        this.setState({startDate: new Date(event.target.value)})
    };

    handleChangeEndDate = (event) => {
        this.setState({endDate: new Date(event.target.value)});
    };

    componentDidUpdate(){
        this.props.filterByDate(this.state.startDate, this.state.endDate)
    }

    render() {
        return (
            <div>
                <TextField
                    label="Due Date Start"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={isValidDate(this.state.startDate) ? this.state.startDate.toISODateString() : ''}
                    onChange={(event) => this.handleChangeStartDate(event)}
                    fullWidth={true}
                />
                <TextField
                    label="Due Date End"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={isValidDate(this.state.endDate) ? this.state.endDate.toISODateString() : ''}
                    onChange={(event) => this.handleChangeEndDate(event)}
                    fullWidth={true}
                />
            </div>
        );
    }

}

export default Advanced;