import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { List, Database, Cog } from "lucide-react";
import logo from '@/lib/arnon-logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();  // <-- useNavigate hook to navigate programmatically

  const links = [
    { href: "/", label: "Home", icon: List },
    { href: "/orders", label: "Orders", icon: List },
    { href: "/components", label: "Components", icon: Database },
    { href: "/settings", label: "Settings", icon: Cog },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo with onClick to navigate to "/" */}
              <img 
                src={logo} 
                className="logo" 
                onClick={() => navigate('/')}  // Navigate to root route when clicked
                alt="Logo" 
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {links.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors",
                    location.pathname === href
                      ? "border-primary text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  )}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
