import {Link, link}  from 'react-router-dom'

const Header =()=> {

    return(
        <>
            <header className="container" id="header">
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className="text-uppercase text-md-center"><Link to='/'>RENT-A-FRIEND!</Link></h1>
                        </div>
                        <div className='col-md-7'>
                            <nav className='nav justify-content-around text-capitalize' id="topNav">
                                <Link to='/home'>home</Link>
                                <Link to='/about'>about</Link> 
                                <Link to='/friends'>friends</Link>

                            </nav>
                        </div>       
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header