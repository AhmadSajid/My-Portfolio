import React from 'react';
import { DiFirebase, DiReact, DiUnitySmall, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='tech'>
<SectionDivider />
<br />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
Experienced Unity Developer with a demonstrated history of working in the computer games industry. 
Skilled in J2EE Web Services, Oracle Database, Java, HTML, and JavaScript.
  I've worked with a range of Technologies in the web development world. From Back-end to Design 
</SectionText>

<List>
  <ListItem>
    <DiUnitySmall size='5rem'/>
    <ListContainer>
      <ListTitle>Game Development</ListTitle>
      <ListParagraph>
        Experience with <br />
        Unity 3D
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiReact size='5rem'/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size='5rem'/>
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        Node and Databases
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;
