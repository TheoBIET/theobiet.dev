export default function Logo({ color = 'black', height = "314" }) {
    const calculateRatio = (height) => {
        const baseRatio = [351, 314];
        const ratio = baseRatio[1] / baseRatio[0];
        return +height * ratio;
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={calculateRatio(height)} height={height} viewBox="0 0 351 314" fill="white">
            <line x1="234" y1="284" x2="234" y2="254" stroke={color} strokeWidth="14" />
            <line x1="227" y1="287" x2="321" y2="287" stroke={color} strokeWidth="14" />
            <line x1="324" y1="294" x2="324" y2="34" stroke={color} strokeWidth="14" />
            <line x1="221" y1="27" x2="331" y2="27" stroke={color} strokeWidth="14" />
            <line x1="213" y1="293.975" x2="213.996" y2="19.9745" stroke={color} strokeWidth="14" />
            <line x1="201" y1="307" x2="341" y2="307" stroke={color} strokeWidth="14" />
            <path d="M344 314V0" stroke={color} strokeWidth="14" />
            <line x1="201" y1="7" x2="341" y2="7" stroke={color} strokeWidth="14" />
            <line x1="194" y1="314" x2="194" stroke={color} strokeWidth="14" />
            <line x1="50" y1="287" x2="180" y2="287" stroke={color} strokeWidth="14" />
            <line x1="50" y1="227" x2="180" y2="227" stroke={color} strokeWidth="14" />
            <line x1="50" y1="167" x2="180" y2="167" stroke={color} strokeWidth="14" />
            <line x1="43" y1="294" x2="43" y2="160" stroke={color} strokeWidth="14" />
            <line x1="59.5446" y1="146.944" x2="157.359" y2="126.153" stroke={color} strokeWidth="14" />
            <line x1="173" y1="154" x2="173" y2="20" stroke={color} strokeWidth="14" />
            <line x1="48" y1="84" x2="168" y2="84" stroke={color} strokeWidth="14" />
            <line x1="43" y1="154" x2="43" y2="20" stroke={color} strokeWidth="14" />
            <line x1="30" y1="307" x2="180" y2="307" stroke={color} strokeWidth="14" />
            <line x1="23" y1="314" x2="23" y2="14" stroke={color} strokeWidth="14" />
            <line y1="7" x2="180" y2="7" stroke={color} strokeWidth="14" />
        </svg>
    );
}