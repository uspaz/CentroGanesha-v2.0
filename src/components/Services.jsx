import { services } from '../utils/services'

const Services = () => {
  return (
    <section>
      {services.map((service) => {
        return (
          <div key={service.id}>
            <h2>{service.title}</h2>
            <h4>{service.subTitle}</h4>
            <p>{service.description}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Services
