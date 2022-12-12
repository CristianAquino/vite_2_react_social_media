import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const infoInputSty =
    "border-none outline-none bg-inputColor rounded-[8px] py-[4px] px-[8px] flex-1";

  const infoInputDivSty =
    "flex gap-[1rem] h-[2rem] w-[100%] items-center justify-center";

  const theme = useMantineTheme();

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
            name="firstName"
            placeholder="First Name"
            className={infoInputSty}
          />
          {/* infoInput */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={infoInputSty}
          />
        </div>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            name="worksAt"
            placeholder="Works at "
            className={infoInputSty}
          />
        </div>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            name="livesIn"
            placeholder="Lives In"
            className={infoInputSty}
          />
          {/* infoInput */}
          <input
            type="text"
            name="country"
            placeholder="Country"
            className={infoInputSty}
          />
        </div>
        <div className={infoInputDivSty}>
          <input
            type="text"
            placeholder="RelationShip Status"
            className={infoInputSty}
          />
        </div>
        <div className={infoInputDivSty}>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="flex items-center justify-center self-end text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] w-[6rem]hover:cursor-pointer ">
          Update
        </button>
      </form>
    </Modal>
  );
};
export default ProfileModal;
