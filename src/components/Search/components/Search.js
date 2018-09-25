import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Advanced from './Advanced';
import {fetchAllTodosAPI} from '../../../api';
import {generateSearchQuery} from '../../../utils';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {keyWord: '', advanced: false}
    }
    handleSearch = () => {
        this.props.updateTodos(this.props.filter)
    };

    handleChangeAdvanced = () => {
        this.setState({advanced: !this.state.advanced});
        this.state.advanced && this.props.filterClearAdvanced()
    };

    handleChangeSearch = (event) => {
        this.setState({keyWord: event.target.value});
        this.props.filterByName(event.target.value);
    };

    handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            this.handleSearch();
        }
    };

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyDown, false);
    }

    render() {
        const {advanced, keyWord} = this.state;
        return (
            <FormControl>
                <Grid container direction='column'>
                    <Grid item container direction='row'>
                        <Grid item>
                            <Input
                            id='searchWord'
                            placeholder='Search Word'
                            startAdornment={
                                <InputAdornment position="start" onClick={this.handleSearch} >
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={this.handleChangeSearch}
                            value={keyWord}
                        />
                        </Grid>
                        <Grid item>
                            <Button color="primary" onClick={this.handleChangeAdvanced}>
                                Advanced
                            </Button>
                        </Grid>
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
}

export default Search;