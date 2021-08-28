import React, { useState } from "react";

import { data } from './data';
import Service from './Service/Service';
// import Info from "./ServiceInfo/Info";

const Services = () => {
    const [showComp, setShowComp] = useState(false);
    const [filteredComponent, setComponent] = useState(null);

    const filterService = (id) => {
        let _filtered = data.find(el => el.id === id);

        if (!filteredComponent) {
            setComponent(_filtered);
            setShowComp(true);
            return;
        }

        if (filteredComponent.id === _filtered.id) {
            setShowComp(false);
            setComponent(null);
        } else {
            setComponent(_filtered);
            setShowComp(true);
        }


    }

    const _services = (<div className="row my-5">
        {data.map(service => (
            <div key={service.id} className="col-md-6 col-lg-3 text-center">
                <Service  iconName={service.iconName} header={service.header} text={service.text} />
            </div>
        ))}
    </div>

    )

    return (
        <section className="p-5  bg-light">
            <div className="container-fluid" id="services">
                <h2 className="h2 text-dark text-center font-weight-bold mb-4">We deliver on every aspect of a complete Hybrid IT solution through any combination of the following</h2>
                {_services}
                {/* {showComp ? <Info>{filteredComponent.component}</Info> : null} */}
                
            </div>
        </section>
    )
};

export default Services;