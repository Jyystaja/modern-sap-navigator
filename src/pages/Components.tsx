import PageContainer from "@/components/layout/PageContainer";
import ComponentsList from "@/components/components/ComponentsList";

const Components = () => {
  return (
    <PageContainer>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Components Inventory</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage all components in the inventory.
          </p>
        </div>
        <ComponentsList />
      </div>
    </PageContainer>
  );
};

export default Components;