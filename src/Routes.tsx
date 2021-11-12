import DataTable from "./pages/DataTable";
import { Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path={'/'} element={<DataTable />}/>
            </Routes>
        </main>
    )
}

export default MyRoutes