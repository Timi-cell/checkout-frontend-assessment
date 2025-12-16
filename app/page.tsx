"use client";

import { useState } from "react";
import Field, { SelectOption } from "@/components/ui/field";
import { checkoutTabs, tokens, walletTypes } from "@/data/wallet-data";
import { WalletOption } from "@/types/wallet";
import AmountField from "@/components/ui/amount-field";
import Button from "@/components/ui/button";
import Link from "next/link";
import ConvertTabs from "@/components/ui/convert-tabs";

export default function ConvertCard() {
  const [payFrom, setPayFrom] = useState<SelectOption | null>(null);
  const [payAmount, setPayAmount] = useState("1.00");
  const [tokenSearchValue, setTokenSearchValue] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("1.00");
  const [activeTab, setActiveTab] = useState(checkoutTabs[0].value);
  // const [selectedToken, setSelectedToken] = useState<Token>(tokens[0]);

  const payFromOptions: SelectOption[] = walletTypes.map(
    (wallet: WalletOption) => ({
      image: wallet.image,
      label: wallet.name,
      value: wallet.id,
    })
  );

  return (
    <div
      className="w-full max-w-160  bg-white rounded-2xl p-6 border border-[#CCF6E5]
 space-y-6"
    >
      <ConvertTabs
        tabs={checkoutTabs}
        active={activeTab}
        onChange={setActiveTab}
      />

      <AmountField
        tokenImage="/images/etherum.png"
        label="You pay"
        value={payAmount}
        onChange={setPayAmount}
        tokenValue={"ETH"}
        tokenSearchValue={tokenSearchValue}
        onSearchTokenChange={setTokenSearchValue}
        options={tokens}
      />
      <AmountField
        tokenImage="/images/nigeria.png"
        label="You receive"
        value={receiveAmount}
        onChange={setReceiveAmount}
        tokenValue="NGN"
      />
      <Field
        label="Pay from"
        select
        options={payFromOptions}
        value={payFrom}
        onChange={setPayFrom}
      />
      <Field label="Pay to" select />
      <Link href="/recipient-details">
        <Button text="Convert now" />
      </Link>
    </div>
  );
}
