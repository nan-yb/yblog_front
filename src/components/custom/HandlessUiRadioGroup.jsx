import { RadioGroup } from "@headlessui/react";


function HandlessUiRadioGroup({ datas, groupValue, setGroupValue } ) {
  if (!datas) {
    return null;
  }

  return (
    <div>
      <div className="w-full pb-12">
        <div className="w-full max-w-xs">
          <RadioGroup value={groupValue} onChange={setGroupValue}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2">
              {datas.map((data ) => (
                <RadioGroup.Option
                  key={data._id}
                  value={data._id}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                        : ""
                    }
                ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
                  relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {data.title}
                            </RadioGroup.Label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default HandlessUiRadioGroup;
