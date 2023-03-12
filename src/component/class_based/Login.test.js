import { shallow } from "enzyme"
import Login from "./Login"

describe('Test login component',()=>{


    test('Check for input box',()=>{
        let wrapper=shallow(<Login/>);

        expect(wrapper.exists('.txtPassCls')).toBe(true);
        expect(wrapper.exists('.txtUsrCls')).toBe(true);
    })

    test('Check Initial state',()=>{
        let wrapper=shallow(<Login/>);

        expect(wrapper.state()).toEqual({isLogin:false});
    })

    test('snapshot testing',()=>{
        let wrapper=shallow(<Login/>);

        expect(wrapper).toMatchSnapshot();
    })
})