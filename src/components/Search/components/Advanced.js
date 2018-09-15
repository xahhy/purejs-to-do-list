import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../../../utils';
import {isValidDate} from '../../../utils';
import Grid from '@material-ui/core/Grid';
import SearchTags from './SearchTags'

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

    componentDidUpdate() {
        this.props.filterByDate(this.state.startDate, this.state.endDate);
    }

    render() {
        const { theme, tags} = this.props;
        return (
            <Grid container>
                <Grid item container direction='row' spacing={16} xs={12}>
                    <Grid item xs={6}>
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
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <SearchTags tags={tags} filterByTags={this.props.filterByTags}/>
                </Grid>
            </Grid>
        );
    }
}

// export default withStyles(styles, {withTheme: true})(Advanced);
export default Advanced;