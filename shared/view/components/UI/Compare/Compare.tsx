export const Compare = ({ color, size = 1 }: { color: string, size?: number }) => <svg style={{ scale: size }} height="48px" viewBox="0 0 24 24" width="48px" xmlns="http://www.w3.org/2000/svg" >
    <g clipPath="url(#clip)">
        <path fill="none" d="M13 3.99969H6C4.89543 3.99969 4 4.89513 4 5.99969V17.9997C4 19.1043 4.89543 19.9997 6 19.9997H13M17 3.99969H18C19.1046 3.99969 20 4.89513 20 5.99969V6.99969M20 16.9997V17.9997C20 19.1043 19.1046 19.9997 18 19.9997H17M20 10.9997V12.9997M12 1.99969V21.9997" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <clipPath id="clip">
            <rect width="24" height="24" fill="none" transform="translate(0 -0.000305176)" />
        </clipPath>
    </defs>
</svg>