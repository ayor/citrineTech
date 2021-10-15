import { useRouter } from 'next/router';
import { data } from '../../components/Services/data';

const Index = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const serviceDetail = data.filter((info) => info.id.toString() === id);

  const detail = serviceDetail.map((serviceInfo) => (
    <div className=" py-3" key={serviceInfo.id}>
      <div className="px-5 py-2 m-3">
        <h2 className="h2 ">{serviceInfo.header}</h2>
      </div>
      <div
        className="w-100"
        id="service-id"
        style={{
          backgroundImage: `url(${serviceInfo.imageSrc})`,
          height: '350px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="row">
        <div
          className="col-md-6 p-5"
          style={{ textAlign: 'justify', textJustify: 'inter-word' }}
        >
          <p className=" text-secondary"> {serviceInfo.mainText}</p>

          <p className=" text-secondary">
            {' '}
            {serviceInfo.hasSecondParagraph
              ? serviceInfo.secondParagraph
              : null}
          </p>
        </div>
        {serviceInfo.hasSubheading ? (
          <div className="col-md-6 py-lg-5 px-5 my-md-3 text-secondary">
            {serviceInfo.subheading.map((heading, ind) => {
              return (
                <div key={ind}>
                  <h6 className="h6">{heading.header}</h6>
                  {heading.detail.list.map((info, infoIndex) => (
                    <ul key={infoIndex} className="list-inline">
                      <li className="list-item">
                        <i className="fas fa-check-circle text-warning "></i>{' '}
                        <small className="ml-2">{info}</small>
                      </li>
                    </ul>
                  ))}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  ));

  return (
    <section className="container-fluid">
      <div className="row ">
        <div className="col">{detail}</div>
      </div>
    </section>
  );
};
export default Index;
