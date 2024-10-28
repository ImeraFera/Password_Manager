
import { FaAddressCard } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const iconMap = new Map([
    ["login", <FaKey size={32} key={0}></FaKey>],
    ["card", <FaCreditCard size={32} key={1}></FaCreditCard>],
    ["note", <FaStickyNote size={32} key={2}></FaStickyNote>],
    ["identity", <FaAddressCard size={32} key={3}></FaAddressCard>],
])
