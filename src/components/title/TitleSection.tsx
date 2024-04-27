export default function TitleSection({ text }: { text: string }) {
  return (
    <div className="font-bold leading-[31.99px] text-2xl text-[#1F1C17]">
      {text}
    </div>
  );
}