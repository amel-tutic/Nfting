const icons = {
    "eye": () => <svg width="20" height="20" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.1099 22.5634C44.0488 22.4232 42.5538 19.108 39.2152 15.7694C36.1174 12.6752 30.7951 8.98438 23.0002 8.98438C15.2054 8.98438 9.88304 12.6752 6.78523 15.7694C3.44663 19.108 1.95163 22.4178 1.89054 22.5634C1.82911 22.7014 1.79736 22.8507 1.79736 23.0018C1.79736 23.1529 1.82911 23.3022 1.89054 23.4402C1.95163 23.5786 3.44663 26.8938 6.78523 30.2324C9.88304 33.3266 15.2054 37.0156 23.0002 37.0156C30.7951 37.0156 36.1174 33.3266 39.2152 30.2324C42.5538 26.8938 44.0488 23.584 44.1099 23.4402C44.1713 23.3022 44.2031 23.1529 44.2031 23.0018C44.2031 22.8507 44.1713 22.7014 44.1099 22.5634ZM23.0002 34.8594C17.3616 34.8594 12.4382 32.8073 8.36468 28.7626C6.65707 27.0655 5.21206 25.1233 4.07734 23C5.21174 20.877 6.65678 18.9354 8.36468 17.2392C12.4382 13.1927 17.3616 11.1406 23.0002 11.1406C28.6388 11.1406 33.5623 13.1927 37.6358 17.2392C39.3437 18.9354 40.7887 20.877 41.9231 23C40.7785 25.194 35.0393 34.8594 23.0002 34.8594ZM23.0002 14.7344C21.3654 14.7344 19.7674 15.2191 18.4081 16.1274C17.0488 17.0356 15.9894 18.3265 15.3638 19.8369C14.7382 21.3472 14.5745 23.0092 14.8934 24.6125C15.2124 26.2159 15.9996 27.6887 17.1555 28.8447C18.3115 30.0006 19.7843 30.7879 21.3877 31.1068C22.9911 31.4257 24.653 31.262 26.1633 30.6364C27.6737 30.0108 28.9646 28.9514 29.8728 27.5921C30.7811 26.2329 31.2659 24.6348 31.2659 23C31.263 20.8087 30.3912 18.708 28.8418 17.1585C27.2923 15.609 25.1915 14.7372 23.0002 14.7344ZM23.0002 29.1094C21.7919 29.1094 20.6107 28.7511 19.606 28.0798C18.6014 27.4085 17.8183 26.4543 17.3559 25.338C16.8935 24.2216 16.7725 22.9932 17.0082 21.8081C17.244 20.623 17.8258 19.5344 18.6802 18.68C19.5347 17.8256 20.6232 17.2437 21.8083 17.008C22.9934 16.7723 24.2218 16.8933 25.3382 17.3557C26.4545 17.8181 27.4087 18.6011 28.08 19.6058C28.7513 20.6105 29.1096 21.7917 29.1096 23C29.1096 24.6203 28.4659 26.1742 27.3202 27.32C26.1745 28.4657 24.6205 29.1094 23.0002 29.1094Z" fill="currentColor" />
    </svg>,
    "eye-cross": () => <svg width="20" height="20" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.1099 22.5634C44.0488 22.4232 42.5538 19.108 39.2152 15.7694C36.1174 12.6752 30.7951 8.98438 23.0002 8.98438C15.2054 8.98438 9.88304 12.6752 6.78523 15.7694C3.44663 19.108 1.95163 22.4178 1.89054 22.5634C1.82911 22.7014 1.79736 22.8507 1.79736 23.0018C1.79736 23.1529 1.82911 23.3022 1.89054 23.4402C1.95163 23.5786 3.44663 26.8938 6.78523 30.2324C9.88304 33.3266 15.2054 37.0156 23.0002 37.0156C30.7951 37.0156 36.1174 33.3266 39.2152 30.2324C42.5538 26.8938 44.0488 23.584 44.1099 23.4402C44.1713 23.3022 44.2031 23.1529 44.2031 23.0018C44.2031 22.8507 44.1713 22.7014 44.1099 22.5634ZM23.0002 34.8594C17.3616 34.8594 12.4382 32.8073 8.36468 28.7626C6.65707 27.0655 5.21206 25.1233 4.07734 23C5.21174 20.877 6.65678 18.9354 8.36468 17.2392C12.4382 13.1927 17.3616 11.1406 23.0002 11.1406C28.6388 11.1406 33.5623 13.1927 37.6358 17.2392C39.3437 18.9354 40.7887 20.877 41.9231 23C40.7785 25.194 35.0393 34.8594 23.0002 34.8594ZM23.0002 14.7344C21.3654 14.7344 19.7674 15.2191 18.4081 16.1274C17.0488 17.0356 15.9894 18.3265 15.3638 19.8369C14.7382 21.3472 14.5745 23.0092 14.8934 24.6125C15.2124 26.2159 15.9996 27.6887 17.1555 28.8447C18.3115 30.0006 19.7843 30.7879 21.3877 31.1068C22.9911 31.4257 24.653 31.262 26.1633 30.6364C27.6737 30.0108 28.9646 28.9514 29.8728 27.5921C30.7811 26.2329 31.2659 24.6348 31.2659 23C31.263 20.8087 30.3912 18.708 28.8418 17.1585C27.2923 15.609 25.1915 14.7372 23.0002 14.7344ZM23.0002 29.1094C21.7919 29.1094 20.6107 28.7511 19.606 28.0798C18.6014 27.4085 17.8183 26.4543 17.3559 25.338C16.8935 24.2216 16.7725 22.9932 17.0082 21.8081C17.244 20.623 17.8258 19.5344 18.6802 18.68C19.5347 17.8256 20.6232 17.2437 21.8083 17.008C22.9934 16.7723 24.2218 16.8933 25.3382 17.3557C26.4545 17.8181 27.4087 18.6011 28.08 19.6058C28.7513 20.6105 29.1096 21.7917 29.1096 23C29.1096 24.6203 28.4659 26.1742 27.3202 27.32C26.1745 28.4657 24.6205 29.1094 23.0002 29.1094Z" fill="currentColor" />
        <line x1="4.64018" y1="8.23178" x2="40.6402" y2="38.2318" stroke="currentColor" strokeWidth="2" />
    </svg>,
    "loading": () => <svg className='svg-rishi' width="15" height="15" viewBox="0 0 100 100">
        <g transform="translate(50,50)">
            <g transform="scale(1)">
                <circle cx="0" cy="0" r="50" fill="currentColor" />
                <circle
                    cx="0"
                    cy="-26"
                    r="12"
                    fill="#307ac9"
                    transform="rotate(161.634)">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 0 0;360 0 0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </g>
    </svg>
}

export default ({ icon }) => {
    const Icon = icons[icon]
    return Icon && <Icon /> || null
}
