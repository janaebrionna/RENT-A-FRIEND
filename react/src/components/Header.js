import {Link, link}  from 'react-router-dom'

const Header =()=> {

    return(
        <>
            <header className="header" id="header">
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className="heading text-uppercase text-md-center"><Link to='/'className={"heading"}>RENT-A-FRIEND!</Link></h1>
                        </div>
                        <div className='col-md-7'>
                            <nav className='nav justify-content-around text-capitalize' id="topNav">
                                <Link to='/home' className={"link"}>home</Link>
                                <Link to='/about' className={'link'}>about</Link> 
                                <Link to='/friends' className={"link"}>friends</Link>
                                <Link to='/adduser' className={"link"}>Add User</Link>
                            </nav>
                        </div>       
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header