import axios from 'axios'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
type test = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
const HomePage: FunctionComponent = () => {
    const [detail, setDetail] = useState<Array<test>>([])
    //pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    //done

    const userData = async () => {
        try {

            const data = await axios.get(`https://reqres.in/api/users?page=2`)
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
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                    <tbody style={{ overflow: 'scroll' }}>
                        {detail
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((elem: test, ind: number) => {
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
                <TablePagination
                    rowsPerPageOptions={[3, 5, 1]}
                    component="div"
                    count={detail.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </>
    )
}

export default HomePage
