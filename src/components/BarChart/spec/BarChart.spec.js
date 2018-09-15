import React from 'react';
import {shallow, mount, render} from 'enzyme';
import BarChart from '../components/BarChart';
import Button from '@material-ui/core/Button';
import '../../../setupTest';
import Todo from '../../../data/Todo';
import {STATUS} from '../../../utils';
import {Pie} from 'react-chartjs-2';

describe('Bar Chart', () => {
    let component;
    let todos = [
        new Todo(0, name, STATUS.TODO),
        new Todo(1, name, STATUS.BLOCKED),
        new Todo(2, name, STATUS.IN_PROGRESS)
    ];
    beforeAll(()=> {
        component = shallow(<BarChart todos={todos}/>)
    });

    it('should have Pie chart component', () => {
        expect(component.find(Pie).length).toBe(1);
    });

    it('should Pie chart have right data', function () {
        expect(component.find(Pie).props().data.datasets[0]).toEqual(expect.objectContaining({
            data: [1,1,1]
        }));
    });
});
