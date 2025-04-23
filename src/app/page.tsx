import Header from "@/components/Client-side/Header";
import PersonalPortfolioCard from "@/components/Server-side/Profile-Card";

export default function Home() {
  return (
    <>
    {/* <Header /> */}
    <div>
      {/* <h1 className=" font-serif">Hello</h1> */}
      <PersonalPortfolioCard />
      <div className="min-h-screen bg-black text-white">
  <h1>Hello world</h1>
</div>
    </div>
    {/* <div>hello</div> */}
    </>
  );
}
