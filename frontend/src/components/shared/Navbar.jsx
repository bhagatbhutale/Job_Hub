import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarBadge } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  
  const {user} = useSelector(store=> store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Logout APi here 
  const logoutHandler = async () => {
    console.log("API HIT")
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials:true
      })
      if(res.data.success) {
        dispatch(setUser(null))
        navigate("/")
        toast.success(res.data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  }

  
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>{" "}
          </h1>
        </div>

        <div>
          <ul className="flex gap-5 items-center font-medium">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/admin/jobs">Jobs</Link>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/Jobs">Jobs</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/browse">Browse</Link>{" "}
                </li>
              </>
            )}

            {/* // if user not login or login condictional rendering  */}
            {!user ? (
              <div className=" flex gap-5">
                <div>
                  <Link to="/login">
                    {" "}
                    <Button variant="outline">Login</Button>
                  </Link>
                </div>
                <div>
                  <Link to="signup">
                    <Button className="bg-[#f2f632]" variant="outline">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer ">
                    <AvatarImage
                      className="w-10 h-10 rounded-full"
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                    <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-4 space-y-2">
                    <Avatar>
                      <AvatarImage
                        className="w-10 h-10 rounded-full"
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user.fullName}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col ml-2 text-gray-600">
                    {user && user.role === "student" && (
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2></User2>
                        <Button variant="link">
                          {" "}
                          <Link to="/profile">View Profile</Link>{" "}
                        </Button>
                      </div>
                    )}

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut></LogOut>
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
