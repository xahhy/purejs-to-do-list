import React from 'react';
import {shallow} from 'enzyme';
import Advanced from '../components/Advanced';
import '../../../setupTest';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchTags from '../components/SearchTags';

describe('Search advanced', function () {
    let component;
    let mockProps = {
        filterByDate: jest.fn()
    };

    beforeAll(() => {
        component = shallow(<Advanced {...mockProps}/>);
    });

    it('should have start date field', function () {
        expect(component.containsMatchingElement(<TextField type='date'/>)).toBeTruthy();
    });

    it('should update start date state', function () {
        let event = {target: {value: '2018-10-01'}};
        component.instance().handleChangeStartDate(event);
        expect(component.state('startDate')).toEqual(new Date('2018-10-01'));
    });

    it('should have end date field', function () {
        expect(component.containsMatchingElement(<TextField type='date'/>)).toBeTruthy();
    });

    it('should update start date state', function () {
        let event = {target: {value: '2018-10-01'}};
        component.instance().handleChangeEndDate(event);
        expect(component.state('endDate')).toEqual(new Date('2018-10-01'));
    });

    it('should called filterByDate after component did update', function () {
        expect(mockProps.filterByDate).toBeCalled();
    });

    it('should have tags field', function () {
        expect(component.containsMatchingElement(<SearchTags/>)).toBeTruthy();
    });
});