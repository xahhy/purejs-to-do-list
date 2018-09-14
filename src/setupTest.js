import 'jsdom-global/register'; //at the top of file , even  , before importing react
import {configure} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
