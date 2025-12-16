type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="px-10 py-5 bg-[#013941] text-[#E6FBF2] rounded-[30px] w-full">
      {text}
    </button>
  );
}
