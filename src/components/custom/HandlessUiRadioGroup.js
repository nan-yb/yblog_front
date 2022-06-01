import React from "react";
import { RadioGroup } from "@headlessui/react";

function HandlessUiRadioGroup({ data }) {
  return (
    <div>
      {data.map((board) => (
        <div key={board._id} className="w-full px-4 pb-12">
          <div className="w-full max-w-xs">
            <RadioGroup>
              <div className="space-y-2">
                {data.map((board) => (
                  <RadioGroup.Option
                    key={board._id}
                    value={board._id}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                          : ""
                      }
                    ${
                      checked
                        ? "bg-sky-900 bg-opacity-75 text-white"
                        : "bg-white"
                    }
                      relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${
                                  checked ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {board.title}
                              </RadioGroup.Label>
                            </div>
                          </div>
                          {checked && (
                            <div className="flex-shrink-0 text-white">
                              {/* <CheckIcon className="w-6 h-6" /> */}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HandlessUiRadioGroup;
