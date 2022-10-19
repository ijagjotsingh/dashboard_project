import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./profile.css";
import { useState } from "react";

function Profile() {
  const [edit, setEdit] = useState(false);
  const [note, setNote] = useState({
    username: "ABC XYZ",
    phone: "9876543210",
    email: "abcxyz@gmail.com",
  });

  function handleEdit() {
    return setEdit(true);
  }

  function handleEdited() {
    return setEdit(false);
  }

  function handleNew(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="profileMain">
          <div className="profileAreaTop">
            <div className="profileAreaTopTitle">Your Profile</div>
            <div onClick={handleEdit} className="edit">
              <EditOutlinedIcon />
            </div>
          </div>
          <div className="profileArea">
            <div className="profileAreaTopDetail">
              <div className="userImage">
                <img src="https://i.redd.it/jeuusd992wd41.jpg" alt="Profile" />
              </div>
              <div className="userProfileName">
                <span>
                  {edit ? (
                    <div className="leaveFormInput editDesign">
                      <label>Edit your Name : </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={note.username}
                        onChange={handleNew}
                      />
                    </div>
                  ) : (
                    <div className="leaveFormInput editDesign">
                      <label></label>
                      <input
                        name="username"
                        type="text"
                        value={note.username}
                        placeholder="Username"
                        disabled
                      />
                    </div>
                  )}
                </span>
              </div>
            </div>
            <div className="profileAreaMiddleDetail">
              <form>
                {edit ? (
                  <div className="leaveFormInput editDesign bb">
                    <label>Edit your Phone No. : </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      value={note.phone}
                      onChange={handleNew}
                      onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                    />
                  </div>
                ) : (
                  <div className="leaveFormInput">
                    <label>Phone No. : </label>
                    <input
                      name="phone"
                      type="number"
                      value={note.phone}
                      placeholder="Phone"
                      disabled
                    />
                  </div>
                )}

                {edit ? (
                  <div className="leaveFormInput editDesign bb">
                    <label>Edit your Email : </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={note.email}
                      onChange={handleNew}
                    />
                  </div>
                ) : (
                  <div className="leaveFormInput">
                    <label>Email : </label>
                    <input
                      name="email"
                      type="email"
                      value={note.email}
                      placeholder="Email"
                      disabled
                    />
                  </div>
                )}
              </form>
              {edit ? <button onClick={handleEdited}>Update</button> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
