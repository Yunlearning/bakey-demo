import Image from "next/image";
import { hylia } from "../fonts";
import { PiStarFourFill } from "react-icons/pi";
import { FaRegUserCircle, FaHandHoldingUsd } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import DiscountStep from "../components/DiscountStep";
export default function Introduce() {
    return (
        <div className="flex flex-col justify-center items-center " >
            <div className="w-full p-20">
                <div className="flex flex-row text-8xl font-bold justify-center">
                    <span>好友分享</span>
                    <span className="px-4 text-5xl self-center"><PiStarFourFill />
                    </span>
                    <span>美味加倍</span>
                </div>
                <div className="flex flex-row text-4xl px-16 py-8">
                    <div className="px-8 py-6 tracking-widest text-center border-2 border-black">
                        推薦好友品嘗好吃麵包
                    </div>
                    <div className="px-8 py-6 tracking-widest grow text-center bg-black text-white">
                        送您$60購物金
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <DiscountStep
                        className="basis-1/4"
                        iconComponent={<FaRegUserCircle size="7em" />}
                        stepTitle="STEP 1"
                    >
                        <p>點選會員帳戶</p>
                        <p>於會員推薦優惠複製連結</p>
                        <p>給好友註冊</p>
                    </DiscountStep>
                    <DiscountStep
                        className="basis-1/4"
                        iconComponent={<TbRosetteDiscountCheck size="7em" />}
                        stepTitle="STEP 2"
                    >
                        <p>好友新客連結</p>
                        <p>註冊完成可獲得<span className="font-bold">$50購物金</span></p>
                        <p>( 期效30日 )</p>
                    </DiscountStep>
                    <DiscountStep
                        className="basis-1/4"
                        iconComponent={<BsCartCheck size="7em" />}
                        stepTitle="STEP 3"
                    >
                        <p>好友完成首購</p>
                        <p>並收到商品</p>
                    </DiscountStep>
                    <DiscountStep
                        className="basis-1/4"
                        iconComponent={<FaHandHoldingUsd size="7em" />}
                        stepTitle="STEP 4"
                    >
                        <p>推薦人將獲得<span className="font-bold">$60購物金</span></p>
                        <p>( 期效60日 )</p>
                    </DiscountStep>
                </div>
            </div>
            <div>
                <Image src="/bakery/bakery2.jpg" alt="hero" width={1920} height={720} />
            </div>
            <div className="w-full flex flex-row text-5xl text-blue-400 px-8 py-16">
                <div className="basis-3/4">
                    <p className={`${hylia.className}`}>BAKERY SIGNATURE TOAST</p>
                    <p>讓人感動流淚的吐司</p>
                </div>
                <div className="basis-1/4 text-end self-end pr-8">
                    <button className="px-4 py-2 bg-blue-400 text-white text-4xl">BUY NOW</button>
                </div>
            </div>
            <div className="relative">
                <Image src="/bakery/bakery6.jpg" alt="hero" width={1920} height={720} />
                <div className="absolute top-0 left-0 w-full h-full flex justify-end items-start text-8xl text-white"
                >
                    {/* <div className="basis-1/2 text-end pt-16">dfsd</div> */}
                    <div className="basis-1/2 pt-10 pr-24 text-center">
                        <p className="text-6xl">\ 一年復始 萬象更新 /</p>
                        <p className="text-7xl">官網消費滿$1580</p>
                        <p className="font-bold">享冷凍免運</p>
                    </div>

                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-end items-end text-6xl text-white">
                    <div className="self-end pb-10 pr-24">
                        <p>Bakery陪你</p>
                        <p>一起展開新的一年</p>
                    </div>

                </div>
            </div>
            <div className="relative">
                <Image src="/bakery/bakery4.jpg" alt="hero" width={1920} height={720} />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center font-bold text-8xl text-white"
                >
                    <p >SHOPS & NEWS</p>
                </div>
            </div>
        </div>
    );
}