import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Advanced from './Advanced';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {keyWord: '', advanced: false}
    }

    handleChangeAdvanced = () => {
        this.setState({advanced: !this.state.advanced})
    };

    render() {
        const {advanced, keyWord} = this.state;
        return (
            <FormControl>
                <Grid container direction='column'>
                    <Grid item>
                        <Input
                            placeholder={'Search Words'}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={event => this.handleChangeSearch(event)}
                            value={keyWord}
                        />
                        <Button color="primary" onClick={this.handleChangeAdvanced}>
                            Advanced
                        </Button>
                    </Grid>
                    <Grid item>
                        {
                            advanced && <Advanced {...this.props}/>
                        }
                    </Grid>
                </Grid>
            </FormControl>
        );
    }

    handleChangeSearch = (event) => {
        this.setState({keyWord: event.target.value});
        this.props.filterByName(event.target.value);
    };
}

export default Search;