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
      <Foot className="footer is-fixed-bottom has-background-grey ">
        <Container>
          <Content>
            <Columns>
              <Column>
                <p>
                  Made with Bulma
                </p>
              </Column>
            </Columns>
            <Content isSize="small">
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
