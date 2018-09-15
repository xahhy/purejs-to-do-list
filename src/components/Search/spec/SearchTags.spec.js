import React from 'react';
import {shallow} from 'enzyme';
import '../../../setupTest'
import SearchTags from '../components/SearchTags';
import MenuItem from '@material-ui/core/MenuItem';

describe('SearchTags', function () {
    let component, event;
    let mockProps = {
        tags: ['TWU', 'MEETING'],
        filterByTags: jest.fn()
    };

    beforeAll(()=>{
        component = shallow(<SearchTags {...mockProps}/>).dive()
    });

    it('should contain all tags in tags menu', function () {
        mockProps.tags.forEach(tag=>{
            expect(component.containsMatchingElement(<MenuItem key={tag}>{tag}</MenuItem>))
        })
    });

    it('should update tags status', function () {
        event = {target:{value: 'TWU'}};
        component.instance().handleChangeTags(event);
        expect(component.state('tags')).toContain('TWU')
    });

    it('should call filterByTags after component did update', function () {
        expect(mockProps.filterByTags).toBeCalled();
    });

});