const User = ({ className = '' }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32" 
            className={className}
        >
            <path 
                d="M16 16C18.4248 16 20.7504 15.1571 22.465 13.6569C24.1796 12.1566 25.1429 10.1217 25.1429 8C25.1429 5.87827 24.1796 3.84344 22.465 2.34315C20.7504 0.842855 18.4248 0 16 0C13.5752 0 11.2496 0.842855 9.53502 2.34315C7.82041 3.84344 6.85714 5.87827 6.85714 8C6.85714 10.1217 7.82041 12.1566 9.53502 13.6569C11.2496 15.1571 13.5752 16 16 16ZM12.7357 19C5.7 19 0 23.9875 0 30.1437C0 31.1687 0.95 32 2.12143 32H29.8786C31.05 32 32 31.1687 32 30.1437C32 23.9875 26.3 19 19.2643 19H12.7357Z"
                fill="currentColor" 
            />
        </svg>
    );
}
export default User;
