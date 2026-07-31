import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Industries from './pages/Industries'
import WhyChooseUs from './pages/WhyChooseUs'
import ContectUs from './pages/ContectUs'
import EnquireNow from './pages/EnquireNow'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact" element={<ContectUs />} />
        <Route path="/enquire" element={<EnquireNow />} />
      </Routes>
    </Layout>
  )
}

export default App