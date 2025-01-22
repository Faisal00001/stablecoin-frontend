

const BalanceSummary = () => {
    return (
        <>
            {/* <div className="space-y-5 w-[30%]">
                            <h3 className="font-bold text-lg">Total balance</h3>
                            <p className="text-3xl font-bold">$5,999,567.25</p>
                            <div className="flex gap-2 items-center">
                                <p>
                                    $112,241,21.98
                                </p>
                                <p>pending</p>
                                <span>
                                    <IoIosInformationCircleOutline className="text-xl" />
                                </span>
                            </div>
                        </div> */}
            {/* Balance Summary */}
            <div className="mt-6 space-y-2">
                <h4 className="font-bold text-2xl">Balance Summary</h4>
                <p>Total Stablecoin Balance: <strong>2,000 (USDG + USDC)</strong></p>
                <p>Fiat Equivalent Value: <strong>$2,000</strong></p>
                <p>Yield Earned:</p>
                <ul className="list-disc ml-5">
                    <li>Total: <strong>$150</strong></li>
                </ul>
            </div>
        </>
    );
};

export default BalanceSummary;