import React from "react";
import {Link} from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    NavbarItem,
    NavbarBurger,
    NavbarMenu,
    NavbarStart,
    NavbarEnd,
    NavbarDropdown,
    Button,
    NavbarLink,
    Icon,
    NavbarDivider,
    Field,
    Control
  } from "bloomer";


function Navigation(props) {
    return (
        <Navbar className="is-primary is-bold" style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
<NavbarBrand>
    <NavbarItem>
        {/* <img  style={{ marginRight: 5 }} /> Bloomer */}
    </NavbarItem>
    <NavbarItem isHidden='desktop'>
        <Icon className='fa fa-github' />
    </NavbarItem>
    <NavbarItem isHidden='desktop'>
        <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
    </NavbarItem>
    {/* <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} /> */}
</NavbarBrand>
{/* <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}> */}
    <NavbarStart>
        <NavbarItem href='#/'>Home</NavbarItem>
        <NavbarItem href='#/'>Portfolio</NavbarItem>
        <NavbarItem href='#/'>About Me</NavbarItem>

        <NavbarItem hasDropdown isHoverable>
            <NavbarLink href='#/documentation'>Team Projects</NavbarLink>
            <NavbarDropdown>
                <NavbarItem href='#/'>Top 5</NavbarItem>
                <NavbarItem href='#/'>Pill Coach</NavbarItem>
                {/* <NavbarDivider /> */}
                <NavbarItem href='#/'>Man's Best Friend</NavbarItem>
            </NavbarDropdown>
        </NavbarItem>
    </NavbarStart>
    <NavbarEnd>
        <NavbarItem href="https://github.com/apshea24" isHidden='touch'>
            <Icon className='fab fa-github' />
        </NavbarItem>
        <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
            <Icon className='fab fa-twitter' style={{ color: '#55acee' }} />
        </NavbarItem>
        <NavbarItem>
            <Field isGrouped>
                <Control>
                    <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                    data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                    a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                        <Icon className="fab fa-twitter" />
                        <span>Tweet</span>
                    </Button>
                </Control>
            </Field>
        </NavbarItem>
    </NavbarEnd>
{/* </NavbarMenu> */}
</Navbar>
    );
}

export default Navigation;