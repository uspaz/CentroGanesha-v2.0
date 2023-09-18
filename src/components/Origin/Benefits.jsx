import { listOfBenefits } from '../../utils/benefits'

const Benefits = () => {
  return (
    <div className=''>
      <ul>
        {listOfBenefits.map((benefit) => {
          return (
            <li key={benefit.id}>
              <img src={benefit.image} alt="" />
              <p>{benefit.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Benefits
