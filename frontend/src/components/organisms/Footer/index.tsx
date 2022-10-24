import React from 'react';
import styled from 'styled-components';
import { purpleTheme, blueTheme } from '../../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareFacebook,
  faSquareTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faPaperPlane} className="footer_logo" />
      <div className="footer_rights">ⓒ 2022 By Store all rights reserved.</div>
      <Policy>
        <div>개인정보처리방침</div>
        <div>약관</div>
        <div>정책</div>
      </Policy>
      <Social>
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="footer_icons facebook"
        />
        <FontAwesomeIcon
          icon={faSquareTwitter}
          className="footer_icons twitter"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="footer_icons instagram"
        />
      </Social>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 8vh;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;

  & .footer_logo {
    font-size: 30px;
    margin: 0px 10px;
  }

  & .footer_rights {
    font-size: 11px;
    margin-left: 30px;
  }
`;

const Policy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  margin: 0 8vw;

  & div {
    margin: 0 10px;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .footer_icons {
    margin: 0 5px;
    font-size: 25px;
  }

  & .facebook {
    color: rgb(24, 119, 242);
  }

  & .twitter {
    color: rgb(28, 150, 232);
  }

  & .instagram {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    border-radius: 3px;
    font-size: 23.5px;
  }
`;

export default Footer;
