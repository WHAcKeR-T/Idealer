import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import TP from "@components/theme-provider";
export const metadata = {
  title: "Idealer",
  description: "Discover & Share New Projects Ideas",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><link rel="shortcut icon" href='/assets/images/logo.png' /></head>
      <body>
        <TP>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </TP>
      </body>
    </html>
  );
};

export default RootLayout;
