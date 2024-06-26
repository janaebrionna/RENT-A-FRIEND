import { useState, useEffect } from "react"
import axios from'axios'

const Form =()=> {

    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '' 
    })
    
    const [ users, setUsers] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3005/api/user').then(res => setUsers(res.data))
    
    }, [])
    
    // console.log(users)
    
    
    const handleChange = (event)=> {
        const {name, value} = event.target
    
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    
    
    const handleSubmit =(event)=>{
        event.preventDefault()

    
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        console.log(formData)
    
        if (regex.test(formData.password) === false) {
            alert('Password not valid.\nMust contain:\n&middot; one uppercase letter\nmiddot; one lowercase letter \n&middot; one number\n&middot; one special character &\nmiddot; at least 8 characters')
        } else{
            console.log('password is valid!')
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/create',
                data: formData
            })
        }
    }

    return(
        <main className="main" id="formMain">
            <div className="container form-con mt-4">
                <h2 className="text-center form-h2">create a login!</h2>
                <form id="form" className="form" onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <div className="col-auto">
                            <label htmlFor="fName" className="form-label text-capitalize form-text">first name</label>
                            <input
                                type="text"
                                id="fName"
                                name="fName"
                                value={formData.fName}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="lName" className="form-label text-capitalize form-text">last name</label>
                            <input
                                type="text"
                                id="lName"
                                name="lName"
                                value={formData.lName}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-auto">
                            <label htmlFor="email" className="form-label text-capitalize form-text">email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="password" className="form-label text-capitalize form-text">password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </div> 
                    <div className="mb-3">
                        <button type="submit" className="btn btn-info text-capitalize">
                            create login
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}



export default Form
