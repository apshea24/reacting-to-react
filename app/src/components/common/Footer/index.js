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
      <Foot className="footer">
        <Container>
          <Content>
            <Columns>
              <Column>
                <p>
                  Made with 
                </p>
              </Column>
            </Columns>
            <Content isSize="small">
              <p>
                The source code is licensed under MIT.
              </p>
              <p>
                The website content is licensed under{" "}
                CC ANS 4.0.
              </p>
            </Content>
          </Content>
        </Container>
      </Foot>
    );
  }
  
  export default Footer;
