import SideNav from "@/app/ui/sideNav";
import TopNav from "@/app/ui/homePage/topNav"
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Footer from "@/app/ui/homePage/Footer"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen flex-col">
            <TopNav />
            {children}
            <Footer />
        </main>

    )
}