import EnterpriseAutomation from './ServiceInfo/EnterpriseAutomation';
import ManagedService from "./ServiceInfo/ManagedService";
import ProjectManagement from "./ServiceInfo/ProjectManagement";
import Telephony from "./ServiceInfo/Telephony";

export const data = [
    {
        id: Math.random() * Math.random() * 10000,
        header: "Managed Services ",
        text: `Utilizing our unique framework for providing managed IT services, Citrine Technologies
        provides  a range of proactive services to keep your computer systems,
        IT infrastructure up and running and your people and business productive
        `,
        component: <ManagedService/>,
        iconName:"hands-helping"
    },
    {
        id: Math.random() * Math.random() * 50000,
        header: "IT Project Management and Consultancy",
        text: `Citrine Technologies Ltd shall develop a methodology of helping you to
        understand your specific cyber domain,
        and how you can reduce the threats you face and become both cyber aware and cyber
        secure.
        `,
        component: <ProjectManagement/>,
        iconName:"cogs"
    },
    {
        id: Math.random() * Math.random() * 70000,
        header: "Telephony and Communication",
        text: `We offer a complete cost-effective telephone solution platform
        with an open source systems & appliances addressing a wide range of call centre/contact centre
            solutions & enterprises solutions.
        `,
        component: <Telephony/>,
        iconName:"satellite-dish"
    },
    {
        id: Math.random() * Math.random() * 20000,
        header: "Enterprise Automation",
        text: ` Forward-thinking business leaders are challenging their organisations
        to
        achieve transformation by harnessing digital technologies with organisational,
        operational,
        and
        business innovation to create new ways of operating and growing businesses.ces addressing a wide range of call centre/contact centre
            solutions & enterprises solutions.
        `,
        component: <EnterpriseAutomation/>,
        iconName:"robot"
    },
]