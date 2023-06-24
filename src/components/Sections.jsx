import PropTypes from 'prop-types'
import flower from '../assets/flower.svg'
const Sections = ({ children }) => {
  return (
    <section className="w-full h-auto py-8  bg-[#F1F6E4] text-center relative z-50">
      {children}
      <div className="z-0">
        <span className="relative z-0 -bottom-[130px] px-[2px] py-[40px] rounded-full bg-[#A9BC81] "></span>
        <img
          className="relative -bottom-[160px] left-[50%] -translate-x-[50%]"
          src={flower}
          alt=""
        />
      </div>
    </section>
  )
}

export default Sections

Sections.propTypes = {
  children: PropTypes.node,
}
