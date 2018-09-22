import React from 'react';
import {shallow} from 'enzyme';
import Search from '../components/Search';
import '../../../setupTest';
import Button from '@material-ui/core/Button';
import Advanced from '../components/Advanced';

describe('Search', function () {
    let component;
    let mockProps = {
        filterByName: jest.fn(),
        filterClearAdvanced: jest.fn()
    };

    beforeAll(() => {
        component = shallow(<Search {...mockProps}/>);
    });

    describe('By keyword', function () {
        it('should set keyword in state', function () {
            let event = {target: {value: 'search word'}};
            component.instance().handleChangeSearch(event);
            expect(component.state('keyWord')).toEqual('search word');
        });

        it('should called filterByName after change keyword', function () {
            expect(mockProps.filterByName).toBeCalled();
        });
    });

    describe('Advanced', function () {
        it('should have advanced button', function () {
            expect(component.containsMatchingElement(<Button>Advanced</Button>)).toBeTruthy();
        });

        it('should show advanced field after click advanced button', function () {
            component = shallow(<Search {...mockProps}/>);
            component.instance().handleChangeAdvanced();
            expect(component.containsMatchingElement(<Advanced/>)).toBeTruthy();
        });

        it('should not show advanced field by default', function () {
            component = shallow(<Search {...mockProps}/>);
            expect(component.containsMatchingElement(<Advanced/>)).toBeFalsy();
        });
    });
});