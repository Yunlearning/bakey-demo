import Link from 'next/link';
import { DropDown, DropDownContent } from '../components/DropDown';
const nacLinks = [
    { name: '送禮禮盒', path: '/' },
    { name: '新品上架', path: '/products' },
    { name: '爆餡貝果', path: '/' },
    { name: '流淚吐司', path: '/' },
    { name: '冰涼西點/點心', path: '/' },
    { name: '人氣商品推薦', path: '/' },
    { name: '會員免費試吃', path: '/' },
    { name: '門市', path: '/' },
];
const navDatas = [
    {
        name: '送禮禮盒',
        category: 'gift',
        // children: [
        //     {
        //         path: "/",
        //         name: "Home",
        //         category: 'toast'
        //     }
        // ]
    },
    {
        name: '新品上架',
        category: 'newest',
        children: [
            {
                id: 10,
                name: "蔓越莓吐司"
            },
        ]
    },
    {
        name: '吐司',
        category: 'toast',
        children: [
            {
                id: 7,
                name: "柔軟吐司"
            }, {
                id: 8,
                name: "酥脆吐司"
            }, {
                id: 9,
                name: "紅豆吐司"
            }, {
                id: 10,
                name: "爆炸波羅頭吐司"
            },
        ]
    },
    {
        name: '核桃麵包',
        category: 'walnutBread',
        children: [
            {
                id: 1,
                name: "起司核桃"
            }, {
                id: 2,
                name: "番茄核桃"
            }, {
                id: 3,
                name: "紅豆核桃"
            },
        ]
    },
    {
        name: '司康',
        category: 'scone',
        children: [
            {
                id: 4,
                name: "原味司康"
            }, {
                id: 5,
                name: "葡萄司康"
            },
        ]
    },
    {
        name: '貝果',
        category: 'bagel',
        children: [
            {
                id: 6,
                name: "起司貝果"
            }, {
                id: 7,
                name: "蔬菜貝果"
            },
        ]
    },
]

export default function NavBar() {
    return (
        <div className="flex flex-row justify-center items-center">
            {
                navDatas.map((item, i) => (
                    item.children ?
                        <DropDown key={i} btnText={item.name}>
                            {
                                item.children.map((child, index) => (
                                    <DropDownContent key={index}>
                                        <Link href="/">
                                            <span>{child.name}</span>
                                        </Link>
                                    </DropDownContent>
                                ))
                            }
                        </DropDown> :
                        <Link key={i} href="/products">
                            <span className="p-2 mr-2 font-bold hover:bg-orange-300 cursor-pointer rounded">{item.name}</span>
                        </Link>
                ))
            }
        </div>
    );
}