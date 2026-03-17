import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import useGetSingleJob from "@/hooks/useGetSingleJob";
import { setSingleJob } from "@/redux/jobSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const JobDescription = () => {

const params = useParams()
const jobId = params.id;
const { singleJob } = useSelector(store => store.job)
const { user } = useSelector(store => store.auth)
const dispatch = useDispatch()
  const isInitiallyApplyed =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id,
    ) || false;

    const [isApplied, setIsApplied] = useState(isInitiallyApplyed);

// Job APply 
const applyJobHandler = async () => {
  try {
    const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {
      withCredentials: true,
    });
    console.log(res.data);
    if(res.data.success) {
      setIsApplied(true) // update the local state
      const updateSingleJob = { ...singleJob, applications:[...singleJob.applications, {applicant: user?._id}] }
      dispatch(setSingleJob(updateSingleJob)) // helps to real time UI updates
      toast.success(res.data.message)
    }
  } catch (error) {
    console.log(error);
   
  }
}

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)) // Ensure the state is in sync data
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob?.position}
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant="ghost">
              {singleJob?.salary}
            </Badge>
          </div>
        </div>
        <Button
        onClick={isApplied ? null : applyJobHandler}
          className={`rounded-lg ${isApplied ? "bg-gray-600 cursor-not-allowed" : "bg-[#7209b7] hover:bg hover:bg-[#9f79e1] "}`}
        >
          {isApplied ? "Already Apply" : "Apply Now"}
        </Button>
      </div>
      {/* // job description */}
      <div>
        <h1 className="font-md border-b-2 border-b-gray-300">
          Job Description
        </h1>
        <h1 className="font-bold my-1">
          Role :{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>{" "}
        </h1>
        <h1 className="font-bold my-1">
          Location :{" "}
          <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span>{" "}
        </h1>
        <h1 className="font-bold my-1">
          Description :{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.description}
          </span>{" "}
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">{singleJob?.experience}</span>{" "}
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">{singleJob?.salary}</span>{" "}
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants :{" "}
          <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span>{" "}
        </h1>
        <h1 className="font-bold my-1">
          Posted Date :{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.createdAt.split("T")[0]}
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
