import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postsImage } from "../../https/postsRequest";
import { updateDataUser } from "../../https/userRequest";
import { updateSuccess } from "../../redux/slice/authSlice";

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const infoInputSty =
    "border-none outline-none bg-inputColor rounded-[8px] py-[4px] px-[8px] flex-1";

  const infoInputDivSty =
    "flex gap-[1rem] h-[2rem] w-[100%] items-center justify-center";

  const theme = useMantineTheme();

  const [formData, setFormData] = useState(data);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const { token, user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const params = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profilePicture"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };
  // const onImageChangeProfile = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     let img = e.target.files[0];
  //     setProfileImage(img);
  //   }
  // };

  // const onImageChangeCover = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     let img = e.target.files[0];
  //     setCoverImage(img);
  //   }
  // };

  const handleUploadProfileImage = (data, token) => {
    postsImage(data, token)
      .then((res) => {
        let nuevo = { ...formData };
        nuevo.profilePicture = res.image;
        setFormData({ ...nuevo });
        handleUpdateUser(token, nuevo);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUploadCoverImage = (data, token) => {
    postsImage(data, token)
      .then((res) => {
        let nuevo = { ...formData };
        nuevo.coverPicture = res.image;
        setFormData({ ...nuevo });
        handleUpdateUser(token, nuevo);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdateUser = (token, data) => {
    updateDataUser(token, data)
      .then((res) => {
        dispatch(updateSuccess(res.data));
        setFormData(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // buscar la forma de secuenciar las peticiones
  const handleSubmit = (e) => {
    e.preventDefault();
    if (profileImage || coverImage) {
      if (profileImage) {
        const data = new FormData();
        const fileName = profileImage.name;
        data.append("name", fileName);
        data.append("file", profileImage);
        handleUploadProfileImage(data, token);
        console.log("profile");
      }
      if (coverImage) {
        const data = new FormData();
        const fileName = coverImage.name;
        data.append("name", fileName);
        data.append("file", coverImage);
        handleUploadCoverImage(data, token);
        console.log("cover");
      }
    } else {
      handleUpdateUser(token, formData);
    }

    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      {/* infoForm */}
      <form className="flex flex-col justify-center items-center gap-[2rem] bg-cardColor rounded-[1rem] p-[1rem]">
        <h3 className="text-[2rem] font-bold">Your info</h3>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className={infoInputSty}
            onChange={handleChange}
            value={formData.firstname}
          />
          {/* infoInput */}
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className={infoInputSty}
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            name="worksAt"
            placeholder="Works at "
            className={infoInputSty}
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            name="livesin"
            placeholder="Lives In"
            className={infoInputSty}
            onChange={handleChange}
            value={formData.livesin}
          />
          {/* infoInput */}
          <input
            type="text"
            name="country"
            placeholder="Country"
            className={infoInputSty}
            onChange={handleChange}
            value={formData.country}
          />
        </div>
        <div className={infoInputDivSty}>
          <input
            type="text"
            name="relationship"
            placeholder="RelationShip Status"
            className={infoInputSty}
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>
        <div className={infoInputDivSty}>
          Profile Image
          <input type="file" name="profilePicture" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverPicture" onChange={onImageChange} />
        </div>
        <button
          className="flex items-center justify-center self-end text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] w-[6rem]hover:cursor-pointer "
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
    </Modal>
  );
};
export default ProfileModal;
