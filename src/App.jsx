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
import './index.css'


const app = function App() {
  return (
    <>
    <Header/>
    <Profile/>
    <Skill/>
    <Language/>
    <Academic/>
    <Work/>
    {/* <Project/> */}
    <Sertifikat/>
    <Form/>
    <Boilerplate/>
    </>
  )
}

export default app
