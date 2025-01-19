import Header from "./Header";
import Sidebar from "./Sidebar";
import ProfilePic from "./ProfilePic";
import Introduction from "./Introduction";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1">
          <div className="ml-[60px] grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2">
              <Introduction /> {/* Introduction on the left */}
            </div>
            <div className="hidden md:block">
              <ProfilePic /> {/* ProfilePic on the right */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
