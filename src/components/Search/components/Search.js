import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {keyWord: ''}
    }

    render() {
        return (
            <FormControl>
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
                    value={this.state.keyWord}
                />
            </FormControl>
        );
    }

    handleChangeSearch = (event) => {
        this.setState({keyWord: event.target.value});
        this.props.filterByName(event.target.value);
    };
}

export default Search;