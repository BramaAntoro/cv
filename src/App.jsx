import { useEffect } from 'react'
import { Academic } from './component/Academic'
import { Boilerplate } from './component/Boilerplate'
import { Form } from './component/Form'
import { Header } from './component/Header'
import { Language } from './component/Language'
import { Profile } from './component/Profile'
import { Project } from './component/Project'
import { Sertifikat } from './component/Sertifikat'
import { Skill } from './component/Skill'
import { Work } from './component/Work'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'


const app = function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div className="overflow-x-hidden font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <div data-aos="fade-up">
          <Profile />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Project />
        </div>
        <div data-aos="fade-up">
          <Skill />
        </div>
        <div data-aos="fade-up">
          <Language />
        </div>
        <div data-aos="fade-up">
          <Work />
        </div>
        <div data-aos="fade-up">
          <Academic />
        </div>
        <div data-aos="fade-up">
          <Sertifikat />
        </div>
        <div data-aos="fade-up">
          <Form />
        </div>
      </main>
      <Boilerplate />
    </div>
  )
}

export default app
