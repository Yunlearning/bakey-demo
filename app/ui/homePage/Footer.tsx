
import { FaFacebook, FaLine, FaInstagramSquare } from "react-icons/fa";
import IconBtn from "../components/IconBtn"
import Link from "next/link";
export default function Footer() {
    return (
        <footer>
            <div className="flex flex-row justify-center py-16 px-24 text-sm">
                <div className="basis-1/4 flex flex-col font-medium leading-6">
                    <p className="font-bold ">選購與了解產品</p>
                    <Link href="/">線上獨家</Link>
                    <Link href="/">人氣商品推薦</Link>
                    <Link href="/">送禮禮盒</Link>
                    <Link href="/">新品上架</Link>
                    <Link href="/">貝果</Link>
                    <Link href="/">西點</Link>
                    <Link href="/">披薩</Link>
                    <Link href="/">吐司</Link>
                    <Link href="/">司康</Link>
                    <Link href="/">vegan</Link>
                    <Link href="/">法式麵包</Link>
                </div>
                <div className="basis-1/4 flex flex-col font-medium leading-6">
                    <p className="font-bold">關於Miopane</p>
                    <Link href="/">活動訊息</Link>
                    <Link href="/">品牌故事</Link>
                    <Link href="/">美味堅持</Link>
                    <Link href="/">商品保存&加熱方式</Link>
                    <Link href="/">熱量表 (在各商品內頁裡)</Link>
                    <Link href="/">訂購單</Link>
                </div>
                <div className="basis-1/4 flex flex-col font-medium leading-6">
                    <p className="font-bold">會員服務</p>
                    <Link href="/">升級會員好康</Link>
                    <Link href="/">查詢我的點數</Link>
                    <Link href="/">購物須知 </Link>
                    <Link href="/">許願池</Link>
                    <Link href="/">顧客回饋單</Link>
                    <Link href="/">隱私政策</Link>
                </div>
                <div className="basis-1/4 flex flex-col font-medium leading-6">
                    <p className="font-bold">聯絡我們</p>
                    <Link href="/">好膳企業股份有限公司</Link>
                    <Link href="/">客服專線 - 0800-036-006</Link>
                    <Link href="/">客服信箱 - miopanemio@gmail.com</Link>
                    <Link href="/">
                        <div>客服時間 - 平日9:00am-17:00pm</div>
                        <div className="text-xs"> (例假日、國定假日非服務時間)</div>
                        <div className="text-xs"> 請善用Line@線上客服我們將盡快回覆您</div>
                    </Link>
                    <Link href="/">地址 - 新北市中和區中正路988巷8號</Link>
                    <Link href="/">line@客服</Link>
                    <Link href="/">門市據點</Link>
                    <Link href="/">人才招攬</Link>
                </div>
            </div>
            <div className="flex flex-row justify-center py-8">
                <div>
                    <IconBtn>
                        <FaFacebook size="3em" />
                    </IconBtn>
                </div>
                <div className="px-2">
                    <IconBtn>
                        <FaLine size="3em" />
                    </IconBtn>
                </div>
                <div>
                    <IconBtn>
                        <FaInstagramSquare size="3em" />
                    </IconBtn>
                </div>
            </div>
        </footer>
    )
};