import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <main className={cn("pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in", className)}>
      {children}
    </main>
  );
};

export default PageContainer;