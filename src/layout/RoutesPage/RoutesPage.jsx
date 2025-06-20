import { Route, Routes } from 'react-router-dom'
import Home from "../../modules/Home/Home"
import Table from '../../modules/Table/Table'
import AdminError from '../../modules/AdminError/AdminError'
import Stuff from '../../modules/Stuff/Stuff'
import ToOrder from '../../modules/ToOrder/ToOrder'
import Waiter from '../../modules/Waiter/Waiter'

export default function RoutesPage() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<AdminError />} />
        <Route path='/table' element={<Table />} />
        <Route path='/stuff' element={<Stuff />} />
        <Route path='/toorder' element={<ToOrder />} />
        <Route path='/waiter' element={<Waiter />} />
      </Routes>
    </>
  )
}
