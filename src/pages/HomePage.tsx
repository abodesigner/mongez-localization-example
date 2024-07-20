import { changeLangAtom } from "@/atoms/changeLangAtom";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomePage() {

    changeLangAtom.useValue();
    return (
        <>
             <Header />
             <Content />
             <Footer />
        </>
    );
}
