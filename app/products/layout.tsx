import SideNav from "@/app/ui/sideNav";
import TopNav from "@/app/ui/homePage/topNav"
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Footer from "@/app/ui/homePage/Footer"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen flex-col">
            <TopNav />
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
                <div className="flex-grow p-6 md:over-flow-y-auto md:p-2">{children}</div>
            </div>
            <Footer />
        </main>

    )
}