import PageContainer from "@/components/layout/PageContainer";
import { Link } from "react-router-dom";
import { Boxes, ClipboardList, Settings } from "lucide-react";

const Index = () => {
  const modules = [
    {
      title: "Production Orders",
      description: "Manage and track production orders in the system",
      icon: ClipboardList,
      path: "/orders",
      color: "bg-blue-500",
    },
    {
      title: "Components",
      description: "View and manage component inventory",
      icon: Boxes,
      path: "/components",
      color: "bg-green-500",
    },
    {
      title: "Settings",
      description: "Configure system preferences and user settings",
      icon: Settings,
      path: "/settings",
      color: "bg-purple-500",
    },
  ];

  return (
    <PageContainer>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Production Management System</h1>
          <p className="mt-2 text-gray-600">Select a module to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link
              key={module.path}
              to={module.path}
              className="group block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg ${module.color} text-white mb-4`}>
                <module.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h2>
              <p className="text-gray-600">{module.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Index;