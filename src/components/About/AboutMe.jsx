import profile from '../../../public/profile.svg'

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-8 items-center p-8 pb-0">
      <img className="order-2 w-32" src={profile} alt="" />
      <h2 className="font-merri  text-2xl order-1">
        Mi nombre es <span className="text-[#A9BC81]">Fabiana</span> y practico <span className="text-[#A9BC81]">Reiki</span> desde
        hace <span className="font-bai">4</span> años
      </h2>
      <div className="font-bai  order-3">
        <p className=''>
          Realice mi iniciación hace más de 4 años luego de tener una excelente
          experiencia con Reiki, esto me abrio la mente para que actualmente sea
          maestra certificada en varias areas como Reiki, Tarot, Yoga y Terapía
          con Hoʻoponopono. Desde entonces lo practico para mejorar tanto mi
          vida y la de mis pacientes, gracias a este increible metodo de
          sanación muchas personas han logrado mejorar sus situaciones.
        </p>
        <p className="mt-12">
          Utilizo la energía curativa de Reiki para trabajar con muchas
          personas, y he recibido comentarios muy positivos sobre el efecto que
          causa. Mi misión es ayudar a curar e iniciar a tanta gente como sea
          posible, que puedan encontrar su camino a través del Reiki, ya que es
          un beneficio inmenso.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
