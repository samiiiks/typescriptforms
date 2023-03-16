import axios from 'axios'
import React, { FunctionComponent, useEffect, useState } from 'react'

type test = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
const HomePage: FunctionComponent = () => {
    const [detail, setDetail] = useState<Array<test>>([])
    

  
    const userData = async () => {
        try {

            const data = await axios.get('https://reqres.in/api/users?page=2')
                .then((res) => {
                    // detail(res.data.data)
                    console.log(res.data)
                    setDetail(res.data.data)

                })
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        userData();
    }, [])
    return (
        <>
            <h1>User Data</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">First_Name</th>
                        <th scope="col">Last_Name</th>
                        <th scope="col">Avatar</th>

                    </tr>
                </thead>
                <tbody style={{ overflow:'scroll'}}>
                    {
                        detail?.map((elem: test, ind: number) => {
                            return (
                                <tr key={ind}>
                                    <td>{elem.id}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.first_name}</td>
                                    <td>{elem.last_name}</td>
                                    <td><img className='avatar' src={elem.avatar} /></td>
                                </tr>
                            )

                        })}
                </tbody>
            </table>
            <footer>
             <nav aria-label="nav">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
</footer>
            
         
        </>
    )
}

export default HomePage
