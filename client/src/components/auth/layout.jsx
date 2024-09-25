import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div
        className="hidden lg:flex items-center justify-center  w-1/2 px-12"
        style={{ backgroundColor: "orangered" }}
      >
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1
            style={{
              position: "absolute",
              top: "40px",
              fontSize: "50px",
              color: "black",
            }}
          >
            AK E-COMMERCE
          </h1>
          <h1
            className="text-4xl font-extrabold tracking-tight "
            style={{ color: "black" }}
          >
            Welcome to ECommerce Shopping
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
