import React from 'react'
import LatestJobCard from './LatestJobCard'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useNavigate } from 'react-router-dom'


const LatestJobs = () => {
// Jobs Get 
useGetAllJobs()
const { allJobs } = useSelector(store => store.job)

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Opening
      </h1>
      {/* // multiple job card displayed  */}
      <div className="grid grid-cols-3 gap-4 my-5">
        { allJobs.length <= 0 ?  <p className="text-center w-full">No jobs available</p> : allJobs?.slice(0,6).map((job) => (
          <LatestJobCard  key={job._id} job={job} />
        )) }
      </div>
    </div>
  );
}

export default LatestJobs
