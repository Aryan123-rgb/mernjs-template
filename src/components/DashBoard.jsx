import React from "react";

const DashBoard = () => {
  return (
    <div className="shadow-sm bg-slDashBoarde-50 rounded-2xl border-2 border-solid border-yellow-400">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
          <span className="shadow-2xl bg-white flex grow flex-col w-full pl-20 pr-3.5 py-8 items-end max-md:max-w-full max-md:pl-5">
            <span className="text-neutral-800 text-opacity-90 text-2xl font-medium whitespace-nowrap justify-center items-stretch border-[color:var(--Input-Box-Stroke-Thin,rgba(0,0,0,0.15))] shadow-sm px-8 py-4 rounded-lg border-[0.889px] border-solid max-md:px-5">
              Dashboard
            </span>
            <div className="flex items-center gap-3 mt-9">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c762e1fe9c9df9a263bc8315b17be38b7a2e74c8ef97cb20d5ffbde50cbe41f?"
                className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <span className="text-indigo-950 text-xl whitespace-nowrap justify-center items-stretch shadow-sm self-stretch grow pl-8 pr-10 py-3.5 rounded-lg border-[0.889px] border-solid border-indigo-900 max-md:px-5">
                My Profile
              </span>
            </div>
            <span className="flex justify-between gap-5 mt-7 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d9c6c3b6f47891225360306e12d4ea5229defa50b1a7a0d5046444fd61ec986?"
                className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-indigo-950 text-xl">My Connections</div>
            </span>
            <div className="text-neutral-800 text-opacity-90 text-base font-medium whitespace-nowrap mr-20 mt-[546px] max-md:mr-2.5 max-md:mt-10">
              Log Out
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <div className="justify-center border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] bg-white flex flex-col pl-16 pr-11 py-4 border-b-[0.889px] border-solid items-end max-md:max-w-full max-md:px-5">
              <div className="items-center flex gap-4 py-px">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69a1db5e7f17dba4ab2f7f9778be7b88ad1f79c0adf18b2cc8bd57fa2a4fdd3?"
                  className="aspect-[0.96] object-contain object-center w-6 fill-black fill-opacity-0 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="items-stretch bg-white bg-opacity-50 self-stretch flex gap-2.5 px-2.5 py-2 rounded-lg border-[1.024px] border-solid border-indigo-50">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[0.97] object-contain object-center w-8 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                  <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="justify-center text-slDashBoarde-700 text-xs font-medium whitespace-nowrap">
                      Welcome back,
                    </div>
                    <div className="justify-center text-slDashBoarde-700 text-lg font-medium whitespace-nowrap">
                      Vishnu Swaroop
                    </div>
                  </span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/797da359aec26bdb2a919504a19324cac2b72f51f34b0bad34c5d6b0723ec88d?"
                    className="aspect-[0.96] object-contain object-center w-6 fill-black fill-opacity-0 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-[752px] max-w-full flex-col items-stretch mr-20 mt-5 self-end max-md:mr-2.5">
              <span className="text-white text-xs font-medium whitespace-nowrap bg-indigo-900 pl-3.5 pr-16 pt-4 pb-28 rounded-lg border-[0.889px] border-solid border-white items-start max-md:max-w-full max-md:pr-5 max-md:pb-10">
                MY PROFILE
              </span>
              <div className="shadow-sm bg-white self-center z-[1] flex mt-0 w-[680px] max-w-full flex-col items-stretch pl-7 pr-11 py-8 rounded-lg border-[1.778px] border-solid border-gray-200 max-md:px-5">
                <div className="max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-square object-contain object-center w-[89px] shadow-sm overflow-hidden shrink-0 max-w-full rounded-[50%] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col items-stretch w-[73%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-stretch max-md:mt-10">
                        <div className="flex w-full items-center justify-between gap-5">
                          <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap items-stretch bg-slDashBoarde-100 justify-center my-auto px-3.5 py-1.5 rounded-[88.889px]">
                            Upload Photo
                          </span>
                          <div className="border-[color:var(--Input-Box-Stroke-Thin,rgba(0,0,0,0.15))] shadow-sm self-stretch flex justify-between gap-5 p-3 rounded-lg border-[0.889px] border-solid items-start">
                            <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
                              <div className="text-neutral-800 text-opacity-90 text-xs font-medium">
                                Professional Details
                              </div>
                              <div className="text-zinc-700 text-opacity-80 text-xs tracking-normal mt-3">
                                This are the professional details shown to users
                                in the app.
                              </div>
                            </span>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/711fa5b1415fc6052664db56e1238f850154b14141edabf9a481f95d0f4b2751?"
                              className="aspect-square object-contain object-center w-12 overflow-hidden self-stretch shrink-0 max-w-full"
                            />
                          </div>
                        </div>
                        <span className="flex w-[243px] max-w-full items-center justify-between gap-5 mt-3.5 self-end">
                          <div className="text-neutral-800 text-opacity-90 text-xs font-medium my-auto">
                            CertificDashBoardions
                          </div>
                          <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-slDashBoarde-100 self-stretch aspect-[2.5625] px-4 py-1.5 rounded-[64.587px]">
                            Edit
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-stretch max-md:mt-10">
                        <div className="border-[color:var(--Input-Box-Stroke-Thin,rgba(0,0,0,0.15))] shadow-sm flex justify-between gap-5 px-4 py-4 rounded border-[0.889px] border-solid items-start">
                          <span className="flex flex-col items-stretch">
                            <div className="text-stone-900 text-opacity-70 text-xs font-medium">
                              Your Name
                            </div>
                            <div className="text-neutral-800 text-opacity-90 text-xs font-medium mt-3.5">
                              Vishnu Swaroop
                            </div>
                            <div className="text-stone-900 text-opacity-70 text-xs font-medium mt-5">
                              Email
                            </div>
                            <div className="text-neutral-800 text-opacity-90 text-xs font-medium whitespace-nowrap mt-3.5">
                              vishnu@oruphones.com
                            </div>
                            <div className="text-stone-900 text-opacity-70 text-xs font-medium mt-5">
                              Phone Number
                            </div>
                            <div className="text-neutral-800 text-opacity-90 text-xs font-medium whitespace-nowrap mt-3.5">
                              +91 49652845732
                            </div>
                          </span>
                          <div className="flex flex-col items-stretch mt-4">
                            <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-slDashBoarde-100 aspect-[2.5] px-4 py-1.5 rounded-[64.587px]">
                              Edit
                            </span>
                            <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-slDashBoarde-100 aspect-[2.5] mt-9 px-4 py-1.5 rounded-[64.587px]">
                              Edit
                            </span>
                            <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-slDashBoarde-100 aspect-[2.5] mt-9 px-4 py-1.5 rounded-[64.587px]">
                              Edit
                            </span>
                          </div>
                        </div>
                        <div className="border-[color:var(--Input-Box-Stroke-Thin,rgba(0,0,0,0.15))] shadow-sm flex flex-col justify-center items-stretch mt-3.5 rounded border-[0.889px] border-solid">
                          <span className="border-[color:var(--Input-Box-Stroke-Thin,rgba(0,0,0,0.15))] shadow-sm flex w-full flex-col items-stretch pt-4 pb-7 px-4 rounded border-[0.889px] border-solid">
                            <span className="flex items-center justify-between gap-5">
                              <div className="text-indigo-900 text-sm font-medium my-auto">
                                <span className="text-neutral-800">About</span>{" "}
                                <span className="text-indigo-900">Vishnu</span>
                              </div>
                              <div className="justify-center items-stretch bg-slDashBoarde-100 self-stretch flex aspect-[2.5] flex-col rounded-[64.587px]">
                                <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-slDashBoarde-100 aspect-[2.5] px-4 py-1.5 rounded-[64.587px]">
                                  Edit
                                </span>
                              </div>
                            </span>
                            <div className="text-zinc-700 text-opacity-80 text-xs tracking-normal mt-3.5">
                              Lorem ipsum dolor sit amet consectetur.
                              ErDashBoard auctor a aliquam vel congue luctus.
                              Leo diam cras neque mauris ac arcu elit ipsum
                              dolor sit amet consectetur.
                            </div>
                          </span>
                        </div>
                        <div className="border-[color:var(--Input-Box-Stroke-Thin,rgba(0,0,0,0.15))] shadow-sm flex justify-between gap-5 mt-3.5 px-4 py-4 rounded border-[0.889px] border-solid items-start">
                          <span className="flex flex-col items-stretch">
                            <div className="text-neutral-800 text-opacity-90 text-sm font-medium whitespace-nowrap">
                              Skills
                            </div>
                            <div className="text-neutral-800 text-opacity-90 text-xs font-medium whitespace-nowrap mt-6">
                              NextJs
                            </div>
                            <div className="text-neutral-800 text-opacity-90 text-xs font-medium whitespace-nowrap mt-6">
                              Typescript
                            </div>
                          </span>
                          <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-slDashBoarde-100 aspect-[2.5] px-4 py-1.5 rounded-[64.587px]">
                            Edit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch mt-1.5 max-md:mt-10">
                        <div className="border-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] bg-white flex items-center justify-between gap-5 pl-6 pr-20 py-2 rounded-3xl border-[0.889px] border-solid max-md:px-5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0dfb7b74853ffc78353bf0194427026871fccaa7ce830afa44d84eaee9b9a7?"
                            className="aspect-[0.96] object-contain object-center w-[23px] fill-yellow-400 overflow-hidden shrink-0 max-w-full my-auto"
                          />
                          <span className="self-stretch flex flex-col items-stretch">
                            <div className="text-zinc-700 text-opacity-80 text-xs tracking-normal whitespace-nowrap">
                              Python
                            </div>
                            <div className="text-zinc-700 text-opacity-80 text-xs tracking-normal mt-2.5">
                              Coding Ninjas
                            </div>
                          </span>
                        </div>
                        <span className="flex justify-between gap-5 mt-8 pr-2.5 items-start">
                          <div className="text-neutral-800 text-opacity-90 text-xs font-medium mt-1.5">
                            {" "}
                            Experience
                          </div>
                          <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-slDashBoarde-100 self-stretch aspect-[2.5625] px-4 py-1.5 rounded-[64.587px]">
                            Edit
                          </span>
                        </span>
                        <span className="border-[color:var(--Input-Box-Stroke-Thin,rgba(0,0,0,0.15))] shadow-sm flex flex-col items-stretch mt-3 pl-3 pr-10 py-3 rounded-lg border-[0.889px] border-solid max-md:pr-5">
                          <div className="text-neutral-800 text-opacity-90 text-xs font-medium whitespace-nowrap">
                            7 Years (2014-2021) Full-time
                          </div>
                          <div className="text-zinc-700 text-opacity-80 text-xs tracking-normal whitespace-nowrap mt-2">
                            Oruphones -- Full Stack Developer
                          </div>
                        </span>
                        <span className="border-[color:var(--Input-Box-Stroke-Thin,rgba(0,0,0,0.15))] shadow-sm flex flex-col items-stretch mt-3.5 pl-3 pr-10 py-3 rounded-lg border-[0.889px] border-solid max-md:pr-5">
                          <div className="text-neutral-800 text-opacity-90 text-xs font-medium">
                            6 months (2014) Intern
                          </div>
                          <div className="text-zinc-700 text-opacity-80 text-xs tracking-normal whitespace-nowrap mt-2">
                            Oruphones -- Full Stack Developer
                          </div>
                        </span>
                        <span className="flex justify-between gap-5 mt-7 pr-3.5 items-start">
                          <div className="text-neutral-800 text-opacity-90 text-xs font-medium">
                            EducDashBoardion
                          </div>
                          <span className="text-stone-900 text-opacity-80 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-slDashBoarde-100 self-stretch aspect-[2.5625] px-4 py-1.5 rounded-[64.587px]">
                            Edit
                          </span>
                        </span>
                        <span className="border-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] shadow-sm bg-white flex flex-col items-stretch mt-2 px-3.5 py-4 rounded-lg border-[0.844px] border-solid">
                          <div className="text-indigo-900 text-xs font-medium tracking-normal">
                            IIT HYDERABAD
                          </div>
                          <div className="text-neutral-800 text-opacity-90 text-xs font-medium whitespace-nowrap mt-4">
                            {" "}
                            (2010-2014) Btech
                          </div>
                          <div className="text-zinc-700 text-opacity-80 text-xs tracking-normal mt-3.5">
                            Lorem ipsum dolor sit amet consectetur. ErDashBoard
                            auctor a aliquam vel congue luctus. Leo diam cras
                            neque mauris ac arcu elit ipsum dolor sit amet
                            consectetur.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
