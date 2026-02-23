import Container from "./Container";
import MenuBar from "./MenuBar";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import FavoriteIcon from "./FavoriteIcon";
import CarteIcon from "./CarteIcon";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server"; 
import { SignedIn, UserButton,ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
const Header = async() => {
  const user =await currentUser();
  console.log(user);
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2 w-auto md:w-1/3 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <MenuBar />
        <div className="flex items-center w-auto md:w-1/3 justify-end gap-5">
          <NavSearch />
          <FavoriteIcon />
          <CarteIcon />
          <ClerkProvider >
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {
              !user && <SignIn />
            }
          </ClerkLoaded>
          </ClerkProvider>

        </div>
      </Container>
    </header>
  );
};
export default Header;
