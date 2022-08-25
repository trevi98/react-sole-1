export default function Info(){
    return (
        <div className="flex justify-center items-center flex-col gap-[10px] pt-[100px] text-center">
            <img src="./img1.png" alt="" className="rounded-t-sm"/>
            <div className="">
                <div className="font-bold text-[25px]">
                    Abdullatif Treifi
                </div>
                <div className="text-[#F3BF99] text-[12.8px]">
                    Full stack developer
                </div>
                <div className="text-[10.4px]">
                    <a href="https://abdullatef.herokuapp.com/">abdullatef.herokuapp.com</a>
                </div>
            </div>
            <div className="flex items-center justify-center gap-[10px] w-full">
                <div className=" cursor-pointer w-[115px] h-[34px] flex items-center justify-center gap-[8px] bg-white text-black rounded-sm">
                    <img src="./Mail.svg" alt="" className="w-[16px] h-[16px]"/>
                    Email
                </div>
                <div className=" cursor-pointer w-[115px] h-[34px] flex items-center justify-center gap-[8px] bg-[#5093E2] text-white rounded-sm">
                    <img src="./linkedin.svg" alt="" className="w-[16px] h-[16px]"/>
                    LinkedIn
                </div>
            </div>
        </div>
    )
}