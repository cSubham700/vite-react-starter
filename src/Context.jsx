import React from 'react'
import Nav from './components/Nav'
import Heading from './components/Heading'
import Section from './components/Section'

const Context = () => {
  return (
    <>
    <Nav/>
    <div className="home">
    <Section level={1}>
      <Heading >Title</Heading>
      <Section level={2}>
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Section level={3}>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Section level={4}>
            <Heading >Sub-sub-heading</Heading>
            <Heading >Sub-sub-heading</Heading>
            <Heading >Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
    </div>
    </>
  )
}

export default Context