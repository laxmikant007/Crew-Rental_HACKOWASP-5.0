import { createContext, useEffect, useState } from "react";

// export const AccountContext= createContext();
import AccountContext from "./AccountContext";

const AccountProvider = (props) => {


    const [profile, setProfile] = useState({
        name:"anshu"
    });

    const [profilePicUrl, setProfilePicUrl]=useState('');



    useEffect(() => {
        console.log("hii")
    })

    return (
        <AccountContext.Provider value={{
            profile,
            setProfile,
            profilePicUrl,
            setProfilePicUrl
        }}>
            {props.childern}
        </AccountContext.Provider>
    )
}

export default AccountProvider;