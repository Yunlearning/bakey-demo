import ProductList from "@/app/ui/components/product/ProductList";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import SideNav from "@/app/ui/sideNav";


export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/", active: false },
                    { label: "Products", href: "/products", active: true },
                    // { label: "Edit Invoice", href: `/dashboard/invoices/${[id]}/edit`, active: true }
                ]}
            />
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                    {/* side nav */}
                </div>
                <div className="flex-grow p-6 md:over-flow-y-auto md:p-2"><ProductList /></div>
            </div>
        </>
    )
}