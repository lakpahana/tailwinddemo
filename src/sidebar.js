import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
        bg-white dark:bg-gray-900 shadow-lg">
            <SideBarIcon icon={<BsFillLightningFill />} />
            <SideBarIcon icon={<BsPlus />} />

        </div>
    );
}

const SideBarIcon = ({icon}) => {
    <div className="sidebar-icon">
        {icon}
    </div>
}

export default SideBar;