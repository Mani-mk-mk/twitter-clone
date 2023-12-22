import Logo from "../assets/icons/Logo";

const Notification = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <div>
          <Logo color="white" />
        </div>
        <div>
          There was a login to your account @SaiyansRandom from a new device on
          Dec 15, 2023. Review it now.
        </div>
      </div>
    </div>
  );
};

export default Notification;
