import PropTypes from 'prop-types'
import flower from '../../assets/flower.svg'
const Sections = ({ children }) => {
  return (
    <section className="w-full h-auto py-8  bg-[#F1F6E4] text-center relative mb-40 shadow-xl">
      {children}
      <div className="">
        <span className="relative z-0 -bottom-[133px] px-[2px] py-[40px] rounded-b-full bg-[#A9BC81]"></span>
        <img
          className="relative -bottom-[170px] left-[50%] -translate-x-[50%] "
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
