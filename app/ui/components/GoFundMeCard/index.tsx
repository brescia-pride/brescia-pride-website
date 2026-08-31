"use client";

import React from "react";

export default function GoFundMeWidget() {
    return (
        <div className="w-full flex justify-center items-center py-4">
            <div className="w-full max-w-[490px] h-[560px] rounded-2xl overflow-hidden">
                <iframe
                    src="https://www.gofundme.com/f/il-pride-e-di-tutt-dona-per-aiutaci-a-renderlo-accessibile/widget/large?attribution_id=sl%3Ab8ac1e81-dfda-41fd-b7da-8b5532b0bc37"
                    className="w-full h-full"
                    title="GoFundMe Brescia Pride"
                />
            </div>
        </div>
    );
}