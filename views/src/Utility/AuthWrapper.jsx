import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AuthWrapper = ({ children: ChildComponent }) => {
  const [user, setUser] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/users/authorized",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          setUser(false);
          console.log(response.status)
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setUser(false);
      }
    };
    fetchUser();
  }, [location.pathname]);

  return <ChildComponent user={user} />;
};

export default AuthWrapper;
