import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import TimeSheet from './modules/timeSheet/timeSheetRoutes';
import ProjectManager from './modules/projectManager/projectManagerRoutes';
import InventoryManagement from './modules/inventoryManagement/inventoryRoutes';
import VacationLeaveManagement from './modules/vacationLeaveManagement/vacationLeaveRoutes';
import EmployeeOnboarding from './modules/employeeOnboarding/onboardingRoutes';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Sidebar />
                <main>
                    <Switch>
                        <Route path="/time-sheet" component={TimeSheet} />
                        <Route path="/project-manager" component={ProjectManager} />
                        <Route path="/inventory-management" component={InventoryManagement} />
                        <Route path="/vacation-leave" component={VacationLeaveManagement} />
                        <Route path="/employee-onboarding" component={EmployeeOnboarding} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;