import PageContainer from "@/components/layout/PageContainer";
import OrdersList from "@/components/orders/OrdersList";

const Orders = () => {
  return (
    <PageContainer>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Production Orders</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track all production orders in the system.
          </p>
        </div>
        <OrdersList />
      </div>
    </PageContainer>
  );
};

export default Orders;