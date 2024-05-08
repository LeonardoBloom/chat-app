import { useAuthContext } from "../../context/AuthContext"

const LoggedUser = () => {
    const { authUser } = useAuthContext()

  return (
    <div className="flex flex-row justify-evenly my-2">
        <div className="avatar">
            <div className="w-20 rounded-full">
                <img src={authUser.profilePic} />
            </div>
        </div>
        <div className="">
            <p className="text-white">Logged in as:</p>
            <h1 className="text-xl text-pink-200 font-bold">{authUser.username}</h1>
        </div>
        
    </div>
  )
}

export default LoggedUser