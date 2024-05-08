import Navbar from "../components/Navbar"

const About = () => {
  return (
    <>
      <Navbar/>
      <section className="grid gap-8 m-4 md:m-8 lg:grid-cols-2 lg:w-[1024px] lg:mx-auto xl:w-[1200px]">
        <div className="grid-cols-1">
          <img 
            src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-with-coconut-palm-tree-paradise-island_74190-2206.jpg"
            alt="about" 
            className="w-full rounded-lg"
          />
        </div>
        <div className="grid-cols-1">
          <h1 className="text-4xl font-medium mb-2">HeadLine</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum consectetur  officiis officia, id dolor quod quidem dignissimos perspiciatis ullam ipsa nihil earum vero  sapiente. Omnis numquam totam minima consequuntur?</p>
        </div>
      </section>
    </>
  )
}

export default About