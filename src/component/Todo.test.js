import TodoApp from './Todo';
import { mount, shallow } from 'enzyme';
import React from "react";
import SimpleForm from './class_based/SimpleForm';
import Table from './Table';

describe("Todo App shallow testing ",()=>{

   test("function testing", ()=>{
      let wrapper = shallow(<TodoApp/>);
      wrapper.find('.input').simulate('change',{target:'abc'})
      wrapper.find('.btnCls').simulate('click');
      console.log(wrapper.debug());
      //expect(wrapper.find('.abc').text()).toBe('abc');
   })
   //  test('adds 1 + 2 to equal 3', () => {
   //     let wrapper=shallow(<TodoApp/>)
   //     //console.log(wrapper.debug());
   //     expect(wrapper.exists('.todoCls')).toEqual(true);
   //  });

   //  test('check useState', () => {
       
   //      const setState = jest.fn();
   //      const useStateSpy = jest.spyOn(React, "useState");
   //      useStateSpy.mockImplementation((initialState) => [initialState, setState]);
   //      let wrapper=shallow(<TodoApp/>)
   //      const newInputValue = "React is Awesome";
   //      wrapper
   //          .find(".input")
   //          .simulate("change", { target: { value: newInputValue } });
   //          console.log(setState);
   //      expect(setState).toHaveBeenCalledWith(newInputValue);
   //      //expect(setState).toEqual([]);
   //   });


     test('check class based comp state',()=>{
        let wrapper=shallow(<SimpleForm/>);
        expect(wrapper.state()).toEqual({txtName:"Parag",dispTxtNm:""});
     })

     test('check class based comp state',()=>{
      let wrapper=shallow(<SimpleForm/>);
      expect(wrapper.state().txtName).toEqual("Parag");
   })

   test('check comp props',()=>{
      let propValue="I am props";
      let wrapper=shallow(<Table myName={propValue}/>);
      expect(wrapper.find('.prpCls').text()).toEqual(propValue);
   })

   //   test('check html element is present',()=>{
   //    let wrapper=shallow(<SimpleForm/>);
   //    expect(wrapper.contains(<h1>My Name is : Parag</h1>)).toEqual(true);
   // })

   // test('check html element text message only',()=>{
   //    let wrapper=shallow(<SimpleForm/>);
   //    expect(wrapper.containsAllMatchingElements([<h1>My Name is : Parag</h1>])).toEqual(true);
   // })

   test('Simulate button to check text message ',()=>{
      let wrapper=shallow(<SimpleForm/>);
      wrapper.find('.myBtnCls').simulate('click');
      expect(wrapper.find('.h1Cls').text()).toEqual('My Name is : Parag');
   })

   test('dive to test inner comp ',()=>{
      let wrapper=shallow(<SimpleForm/>);
    
      expect(wrapper.find(Table).dive().exists('.tblCls')).toBe(true);
   })

   test('Snapshot testing ',()=>{
      let wrapper=shallow(<SimpleForm/>);
    
      expect(wrapper).toMatchSnapshot();
   })
})

describe.skip("Todo App Mount testing",()=>{

   beforeAll(()=>{
      console.log("Before All");
   })

   beforeEach(()=>{
      console.log("Before Each");
   })
   

   test('Mount testing', ()=>{
      let wrapper = mount(<SimpleForm/>);

      //console.log(wrapper.debug());
      expect(wrapper.exists('.tblCls')).toBe(true);
   })

   test('Testing using Instance ', ()=>{
      let wrapper = shallow(<SimpleForm/>);

      let testInstance = wrapper.instance().onBtnClicked();
      expect(testInstance).toBe(3);
   })

   test('Testing async func using Instance ', ()=>{
      let wrapper = shallow(<SimpleForm/>);

      return wrapper.instance().asyncFunc(4).then(data=>{
         expect(data).toBe("I am resolved");
      });
      
   })

   test('Testing using jest.spyOn lifecyle method ', ()=>{
      jest.spyOn(SimpleForm.prototype,'componentDidMount');
      let wrapper = shallow(<SimpleForm/>);
      expect(SimpleForm.prototype.componentDidMount).toHaveBeenCalled();
   })

   test.skip('Testing using jest.spyOn user created method ', ()=>{      
      let wrapper = shallow(<SimpleForm/>);
      let instance=wrapper.instance();
      jest.spyOn(instance,'func');
      wrapper.find('button').simulate('click');
      expect(instance.func).toHaveBeenCalled();
   })
})