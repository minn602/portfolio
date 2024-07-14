import About from "./_components/About"
import CustomCursor from "./_components/CustomCursor"
import Experience from "./_components/Experience"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
import Hero from "./_components/Hero"
import Other from "./_components/Other"
import Projects from "./_components/Projects"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Other />
        <Footer />
      </main>
    </>
  )
}
