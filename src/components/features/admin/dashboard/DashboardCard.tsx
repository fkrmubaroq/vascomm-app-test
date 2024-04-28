
export default function DashboardCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="w-[260px] h-[117px] px-[28px] py-8 flex flex-col gap-y-2 relative overflow-hidden bg-gradient-to-r from-[#ADC9FF] rounded-2xl to-[#C2D6FF] font-poppins">
      <div className="text-[#597393] opacity-85 text-sm leading-[21px] relative ">
        {title}
      </div>
      <div className="text-[#002060] text-2xl font-light leading-[19.2px]">{text}</div>
      <Rectangle />
    </div>
  );
}

function Rectangle() {
  return (
    <div className="absolute -right-5 -bottom-5">
      <svg
        width="73"
        height="88"
        viewBox="0 0 73 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          opacity="0.2"
          cx="27.7328"
          cy="56.205"
          rx="27.5661"
          ry="31.005"
          fill="white"
        />
        <ellipse
          opacity="0.2"
          cx="45.4167"
          cy="31.635"
          rx="27.5661"
          ry="31.005"
          fill="white"
        />
      </svg>
    </div>
  );

}