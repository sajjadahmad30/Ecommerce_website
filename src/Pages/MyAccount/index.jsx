import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import AccountSideBar from "../../components/AccountSideBar";

const MyAccount = () => {
  return (
    <section className='!py-10 w-full'>
        <div className="container flex gap-5">
            <div className="col1 w-[20%]">
               <AccountSideBar/>
            </div>

            <div className="col2 w-[50%]">
                <div className="card bg-white !p-5 shadow-md rounded-md">
                    <h2  className='font-[600] !pb-3'>My Profile</h2>
                    <hr />
                    <form className="!mt-5">
                        <div className="flex items-center gap-5">
                            <div className="w-[50%]">
                                <TextField
                                label="Full Name *"
                                variant="outlined"
                                size="small"
                                className="w-full"
                                 />
                            </div>
                            <div className="w-[50%]">
                                <TextField
                                label="Email *"
                                variant="outlined"
                                size="small"
                                className="w-full"
                                 />
                            </div>
                        </div>

                        <div className="flex items-center !mt-5 gap-5">
                            <div className="w-[50%]">
                                <TextField
                                label="Phone Number *"
                                variant="outlined"
                                size="small"
                                className="w-full"
                                 />
                            </div>
                        </div>
                        <br />

                        <div className="flex items-center gap-3">
                            <Button className='btn-org btn-lg w-[100px]'>Save</Button>
                            <Button className='btn-org btn-lg w-[100px] btn-border'>Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MyAccount
