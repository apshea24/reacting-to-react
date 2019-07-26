import React, {useState} from "react";
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
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar className="has-text-primary is-bold header is-fixed-top header" style={{ border: 'solid 1px #00D1B2', margin: '0'}} isFlex="mobile">
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

    <NavbarStart className="data-menu" style={{marginRight: "20px"}}>
    <NavbarItem>
    <h1 style={{fontFamily: "'Cinzel', serif", marginRight: "20px"}}>Austin Shea</h1>
    </NavbarItem>
    <NavbarItem href="https://github.com/apshea24" isHidden='touch'>
            <Icon className='fab fa-github' />
        </NavbarItem>
        <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
            <Icon className='fab fa-twitter' style={{ color: '#55acee' }} />
        </NavbarItem>
        <NavbarItem>
            <Field isGrouped>
                <Control>
                    {/* <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                    data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                    a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                        <Icon className="fab fa-twitter" />
                        <span>Tweet</span>
                    </Button> */}
                </Control>
            </Field>
        </NavbarItem>
    </NavbarStart>
    {/* <NavbarItem style={{fontSize: "3rem", margin: "auto"}}>

    <Icon className='fas fa-laptop-code brand_icon'/>
    </NavbarItem> */}
    <NavbarEnd>
    <NavbarBurger onClick={() => setMenuOpen(!menuOpen)} />
        <NavbarMenu  isActive={menuOpen}>

    <NavbarItem href='/'>Home</NavbarItem>
        <NavbarItem href='/portfolio'>Portfolio</NavbarItem>
        <NavbarItem href='/contact'>Contact Me</NavbarItem>

        <NavbarItem hasDropdown isHoverable>
            <NavbarLink href='#/documentation'>Team Projects</NavbarLink>
            <NavbarDropdown>
                <NavbarItem href='https://carringtonallison.github.io/top5/'>Top 5</NavbarItem>
                <NavbarItem href='http://pillcoach.herokuapp.com/'>Pill Coach</NavbarItem>
                {/* <NavbarDivider /> */}
                <NavbarItem href='https://enigmatic-lake-24268.herokuapp.com/'>Man's Best Friend</NavbarItem>
            </NavbarDropdown>
        </NavbarItem>
        
        </NavbarMenu>
    </NavbarEnd>
{/* </NavbarMenu> */}
</Navbar>
    );
}

export default Navigation;