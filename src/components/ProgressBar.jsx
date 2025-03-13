import React, { useState } from "react";
import {
    Package,
    Truck,
    Handshake as HandShake,
    ClipboardList,
} from "lucide-react";

const ProgressBar = () => {
    const [currentStatus, setCurrentStatus] = useState("placed");

    const steps = [
        { id: "placed", title: "Order Placed", icon: ClipboardList },
        { id: "packaging", title: "Packaging", icon: Package },
        { id: "on-road", title: "On The Road", icon: Truck },
        { id: "delivered", title: "Delivered", icon: HandShake },
    ];

    const getStepStatus = (stepId) => {
        const currentIconIndex = steps.findIndex((step) => step.id === stepId);
        console.log("step id", stepId)
        console.log("step data", currentIconIndex)

        const currentStepOrder = steps.findIndex(
            (step) => step.id === currentStatus
        );

        if (currentIconIndex < currentStepOrder) return "completed";
        if (currentIconIndex === currentStepOrder) return "current";
        return "upcoming";
    };

    return (
        <div className="  flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-3xl mb-8">
                <div className="relative">
                    {/* Progress Bar */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-gray-200">
                        <div
                            className="h-full bg-orange-500 transition-all duration-500"
                            style={{
                                width: `${(steps.findIndex((step) => step.id === currentStatus) /
                                    (steps.length - 1)) *
                                    100
                                    }%`,
                            }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="relative flex justify-between">
                        {steps.map((step) => {
                            const status = getStepStatus(step.id);
                            const Icon = step.icon;

                            return (
                                <div key={step.id} className="flex flex-col items-center">
                                    <div
                                        className={`
                    w-16 h-16 rounded-full flex items-center justify-center cursor-pointer
                    transform transition-all duration-300 hover:scale-110
                    ${status === "completed"
                                                ? "bg-orange-500 text-white"
                                                : status === "current"
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-white border-2 border-gray-200 text-gray-400"
                                            }
                  `}
                                        onClick={() => setCurrentStatus(step.id)}
                                    >
                                        <Icon className="w-8 h-8" strokeWidth={2} />
                                    </div>
                                    <p
                                        className={`
                  mt-3 text-sm font-medium text-center
                  ${status === "completed" || status === "current"
                                                ? "text-gray-900"
                                                : "text-gray-400"
                                            }
                `}
                                    >
                                        {step.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
