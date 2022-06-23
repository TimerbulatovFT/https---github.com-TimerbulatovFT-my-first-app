function Header(props) {
    return (
        <header>
            <h1>
                {props.data.siteName}
            </h1>
            <h2>
                {props.data.secondName}
            </h2>
            <Nav nav={props.data.nav}/>
        </header>
    )
}

function Nav(props) {
    let data = props.nav;
    const listItem = data.map(item=><li key={item.link}><a href={item.link}>{item.text}</a></li>)
    return (
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    )
}

export default Header