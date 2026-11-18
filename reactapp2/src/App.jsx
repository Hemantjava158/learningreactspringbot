import Welcome from "./components/Welcome";
import Card from "./components/Card";
import Button from "./components/Props";
import Employee from "./components/Employee";
// import Counter from "./components/counter";
import EmployeeList from "./components/EmployeeList";
import ChildrenExample from "./components/children";
import EventHandle from "./components/Event"
import Parent from "./components/communication";
import ListRendering from "./components/ListRendering";
import ChildComponentRendering from "./components/ChildComponentRendering";
import EmployeeTable from "./components/RenderingListsTable";
import ConditionalRendering from "./components/ConditionalRendering";
// import Counter from "./components/UseStateHook";
// import Profile from "./components/UseStateHook";
import EmployeeForm from "./components/UseStateHook";
// import LiftingStateUp from "./components/LiftingStateUp";
import EventHandling from "./components/EventHandling";
import EmployeeFormEventHandling from "./components/EmployeeFormEventHandling";
import UseEffectExample from "./components/UseEffectExample";
import Timer from "./components/Timer";
import WindowWidth from "./components/WindowWidth";
// import Notifications from "./components/Notifications";
import EmployeeSearchSort from "./components/EmployeeSearchSort";
import FocusInput from "./components/FocusInput";
import RenderCounter from "./components/RenderCounter";
import PreviousValueExample from "./components/PreviousValueExample";
import EmployeeFormUseRef from "./components/EmployeeFormUseRef";
import LiftingStateUp from "./components/statemanagement/LiftingStateUp"
import DerivedState from "./components/statemanagement/DerivedState";
import ResetInitializePattern1 from "./components/statemanagement/ResetInitializePattern1";
import ResetInitializePattern2 from "./components/statemanagement/ResetInitializePattern2";
import MyContextAPI from "./components/MyContextAPI";
import UseReducerHook from "./components/UseReducerHook";
import UseReducerHook1 from "./components/UseReducerHook1";
import ReducerContext from "./reducercontextexample/ReducerContext";
import UseMemoCalculation from "./components/UseMemo";
import UseMemoFilterExample from "./components/UseMemoFilterExample";
import UseMemoEmployeeSalary from "./components/UseMemoEmployeeSalary";
import UsememoEmployeeSearch from "./components/UsememoEmployeeSearch";
import UseCallbackParent from "./components/UseCallbackParent";
import UseCallbackCounter from "./components/UseCallbackCounter";
import ReactMemo1 from "./components/ReactMemo1";
import CustomHookCounter from "./components/CustomHookExample";
import ParentRefInput from "./components/ParentRefInput";
import ParentPortal from "./components/ParentPortal";
import EmployeeDetailsErrorBoundary from "./components/EmployeeDetailsErrorBoundary";
import LazyLoading from "./components/lazyloading/LazyLoading";
import ReactRouter from "./components/lazyloading/ReactRouter";
import NestedRouting from "./components/lazyloading/NestedRouting";
import UseNavigate from "./components/lazyloading/UseNavigate";
import ProtectedRouteExample from "./router/ProtectedRouteExample";
import Greeting from "./components/Greeting";
import {FirstComponent, SecondComponent} from "./components/MyComponents";
import MyComponents from "./components/MyComponents";
import HelloWorld from "./components/HelloWorld";
import EmployeePropsExample from "./components/EmployeePropsExample";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/lazyloading/Navbar";


function App() {
    return (
        <div>
             <Welcome name={"Hemant kumar"}/> 
             <Greeting/>
             <FirstComponent/>
             <SecondComponent/>
             <MyComponents/>
             <HelloWorld/>
             <EmployeePropsExample/>
            <Card/>
            <Button label="Sign Up"/><br/>
            <Button label="Sign in"/>
            <Employee name="Hemant kumar" department="IT" salary="105000"/>
            {/* <Counter/> */}
            <EmployeeList/>
            <ChildrenExample>
    <h2>Employee Details</h2>
    <p>Hemant kumar</p>
</ChildrenExample>


        <EventHandle/>
        <Parent/>
        <ListRendering/>
        <ChildComponentRendering/>
        <EmployeeTable/>
        <ConditionalRendering/>
        {/* <Profile/> */}
        <EmployeeForm/>
        {/* <LiftingStateUp/> */}
        <EventHandling/>
        <EmployeeFormEventHandling/>
        <UseEffectExample/>
        <Timer/>
        <WindowWidth/>
        {/* <Notifications/> */}
        <EmployeeSearchSort/>
        <FocusInput/>
        <RenderCounter/>
        <PreviousValueExample/>
        <EmployeeFormUseRef/>
        <LiftingStateUp/>
        <DerivedState/>
        <ResetInitializePattern1/>
        <ResetInitializePattern2/>
        <MyContextAPI/>
        <UseReducerHook/>
        <UseReducerHook1/>
        <ReducerContext/>
        <UseMemoCalculation/>
        <UseMemoFilterExample/>
        <UseMemoEmployeeSalary/>
        <UsememoEmployeeSearch/>
        <UseCallbackParent/>
        <UseCallbackCounter/>
        <ReactMemo1/>
        <CustomHookCounter/>
        <ParentRefInput/>
        <ParentPortal/>
        <EmployeeDetailsErrorBoundary/>
        <LazyLoading/>
        <ReactRouter/>
        <NestedRouting/>
        <UseNavigate/>
        <ProtectedRouteExample/>


{/* <BrowserRouter>
      <header>
        <h1>My React Router App</h1>        
      </header>

      <main>
        <ReactRouter/>
      </main>
      
      <footer>
        <p>© 2026 My React Router App</p>
      </footer>      
    </BrowserRouter> */}


        </div>
    );
}

export default App;