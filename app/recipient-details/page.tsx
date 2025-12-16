import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RecipientDetails() {
  return (
    <div
      className="w-full max-w-160 bg-white rounded-2xl p-6 border border-[#CCF6E5]
 space-y-6"
    >
      <div className="flex items-center justify-start">
        <Link href="/">
          <ArrowLeft width={24} height={24} />
        </Link>
        <h1 className="font-medium text-[20px] text-center w-full text-[#013941]">
          Recipient Details
        </h1>
      </div>
      <Field label="Bank" select />
      <Field
        label="Account number"
        select={false}
        placeholder="Enter your account number"
      />
      <Field
        label="Account name"
        select={false}
        inputValue="ODUTUGA GBEKE"
        extraStyles="bg-[#F2F2F2] text-[#013941] font-normal cursor-not-allowed"
      />
      <div className="mt-20">
        <Button text="Next" />
      </div>
    </div>
  );
}
