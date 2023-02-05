import { color } from "@mui/system";
import { Store } from "react-notifications-component";
import "./Notifications.css";
export const Notification = ({ message, type = null }) => {
  console.log(type);
  Store.addNotification({
    title: "Channels Configured",
    message: message,
    type: type ?? "success",
    insert: "top",

    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
      pauseOnHover: true,
    },
    width: " 554px",
    height: "116px",
    background: "#F1FFF7;",
  });
};
