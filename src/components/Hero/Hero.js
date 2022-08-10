import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Incoming intern at Microsoft, India.
      </SectionText>
      <Button onclick={() => window.location = 'https://www.linkedin.com/in/shreya-gupta-86a3a7202/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;