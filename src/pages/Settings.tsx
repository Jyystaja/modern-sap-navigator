import PageContainer from "@/components/layout/PageContainer";

const Settings = () => {
  return (
    <PageContainer>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Configure your production management system.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-500">Settings page content will be implemented in the next iteration.</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Settings;