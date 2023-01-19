import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
Welcome to <br/>
My Personal Portfolio
  </SectionTitle>
  <SectionText>
  Experienced Unity Developer with a demonstrated history of working in the computer games industry. Skilled in J2EE Web Services, Oracle Database, Java, HTML, and JavaScript. Strong engineering professional with a BS Software Engineering focused in Computer Software Engineering from International Islamic University, Islamabad.
  </SectionText>
  <Button onClick={() => window.location='https://google.com'}>Learn More</Button>
</LeftSection>
</Section>
);

export default Hero;