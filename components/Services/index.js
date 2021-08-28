import React from "react";
import Header from '../Header/Header';
import Services from "./Services";
import ManagedService from "./ServiceInfo/ManagedService";
import Automation from "./ServiceInfo/EnterpriseAutomation";
import ProjectManagement from "./ServiceInfo/ProjectManagement";
const Index = props => (
    <>
        < Header title={"What We Do"}
            bannerMessage={`We are a managed IT services provider with a track record of providing hybrid solutions 
    tailored for mid-market and enterprise companies.`}
    headerHeight={"text-center "}
        />
        <Services />
        <ManagedService />
        <ProjectManagement />
        <Automation />
    </>
);
export default Index;