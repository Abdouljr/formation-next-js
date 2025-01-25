import Footer from "@/components/navbar/footer";
import Header from "@/components/navbar/header";

type props = {
  children: React.ReactNode;
};

export default function layout({ children }: props) {
  return (
    <div className="min-h-screen w-full">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
