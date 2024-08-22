import UserBadge from "../UserBadge";

const Header = () => {
    return (
        <div className='flex border w-full'>
            <span>INICIO</span>
            <UserBadge />
        </div>
    );
}
export default Header;