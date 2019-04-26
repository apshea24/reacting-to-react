import React from "react";
import StickyFooter from 'react-sticky-footer';
import {
    Footer as Foot,
    Container,
    Content,
    Icon,
    Column,
    Columns

} from "bloomer";

function Footer(props) {
    return (
      <Foot className="footer is-fixed-bottom is-paddingless  has-text-centered">
        <Container>
          <Content>

            <Content isSize="small">
            <p>
                  Made with Bulma
                </p>
              <p>
                Austin Shea's Portfolio Page.
              </p>
              <p>
                Copyright
              </p>
            </Content>
          </Content>
        </Container>
      </Foot>
    );
  }
  
  export default Footer;
