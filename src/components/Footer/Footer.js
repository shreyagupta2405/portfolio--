import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:shreyagupta240501@gmail.com">shreyagupta240501@gmail.com</LinkItem>
        </LinkColumn>
        <br />
        <LinkColumn>
          <LinkTitle>Twitter</LinkTitle>
          <LinkItem href="https://twitter.com/24_Shreyaa">24_Shreyaa</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer >
        <CompanyContainer >
          <SocialIcons href="https://github.com/shreyagupta2405">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/shreya-gupta-86a3a7202/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/shreyaa24_/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
