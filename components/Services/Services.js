import React from "react";
import { data } from './data';
import Service from './Service/Service';


const Services = (props) => {
    const _services = (<div className="row my-5">
        {data.map(service => (
            <div key={service.id} className="col-md-6 col-lg-3 text-center">
                <Service iconName={service.iconName} class={service.classKey}
                    header={service.header} text={service.text} />
            </div>
        ))}
    </div>
    )

    return (
        <section className="p-5  bg-light">
            <div className="container-fluid" id="services">
                <h2 className={props.headerClass}>
                    We deliver on every aspect of a complete Hybrid IT solution through any combination of the following
                </h2>
                {_services}
                {/* {showComp ? <Info>{filteredComponent.component}</Info> : null} */}

            </div>
        </section>
    )
};

export default Services;