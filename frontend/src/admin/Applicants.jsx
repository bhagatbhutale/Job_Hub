import Navbar from '@/components/shared/Navbar'
import React, { useEffect } from 'react'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'
import store from '@/redux/store'

const Applicants = () => {

    // id get from URL
    const params = useParams()
    const dispatch = useDispatch()
    const { applicants } = useSelector(store=>store.application)

    // call the APi here 
    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, {
                    withCredentials:true
                })
                
                    dispatch(setAllApplicants(res.data.job))
                    console.log(res.data);
                
            } catch (error) {
                
            }
        }
        fetchAllApplicants()
    }, [])
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto' >
        <h1 className='font-bold text-xl' >Applicants : {applicants?.applications?.length}</h1>
        <ApplicantsTable />
      </div>
    </div>
  )
}

export default Applicants
