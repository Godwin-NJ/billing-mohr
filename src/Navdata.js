import { AiOutlineBorderTop } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdInsertInvitation } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoAppsOutline } from "react-icons/lo";

export const Navigation = [
  {
    id: 1,
    nav: "general",
    icon: <AiOutlineBorderTop />,
  },
  {
    id: 2,
    nav: "password",
    icon: <RiLockPasswordFill />,
  },
  {
    id: 3,
    nav: "invitations",
    icon: <MdInsertInvitation />,
  },
  {
    id: 4,
    nav: "billing",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 5,
    nav: "apps",
    icon: <IoAppsOutline />,
  },
];
