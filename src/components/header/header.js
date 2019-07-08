
import React from 'react';

const Header = (props)=> (
    <nav style={{background: "blue", color: "yellow"}} className={"navbar navbar-default sticky-top"}>
        <div className={"conatiner"}>
            <div>Spongebob Squarepants & Friends</div>
            <div>score:{props.score}</div>
        </div>
    </nav>
);

export default Header;