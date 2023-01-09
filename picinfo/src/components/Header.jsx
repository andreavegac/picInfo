import './Header.css'
function Header(props){
    return <header className='headerComponent'>
        <div class="overlay">
        <h1>PicInfo</h1>
        <h3>Lorem Picsum data information</h3>
        <p>Showing the information of some pics extracted from Lorem Picsum. This is a PoC to defend doing the project with React instead of plain JS.</p>
		</div>
    </header>;
}

export default Header;