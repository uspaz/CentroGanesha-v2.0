import { listOfBenefits } from '../../utils/benefits'

const Benefits = () => {
  return (
    <div className='w-full px-10 mb-20'>
      <h2 className='text-3xl pt-10 mb-16 font-merri'>Beneficios</h2>
      <ul>
        {listOfBenefits.map((benefit) => {
          return (
            <li className='mb-10' key={benefit.id}>
              <img className='mx-auto' src={benefit.image} alt="" />
              <p className='font-bai'>{benefit.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Benefits
