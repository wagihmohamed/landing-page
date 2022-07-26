import { HomeLeftBar } from "../components/homeLeft";
import { HomeMiddle } from "../components/homeMiddle";
import { HomeRightBar } from "../components/homeRight";

export const Home = (): JSX.Element => {
    return (
        <div className="w-full h-screen">
            <div className="flex w-full h-full flex-col md:flex-row gap-3">
                {/* left div */}
                <HomeLeftBar />
                {/* middle div */}
                <HomeMiddle />
                {/* right div */}
                <HomeRightBar />
            </div>
        </div>
    );
}