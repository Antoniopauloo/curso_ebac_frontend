
interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

const LoadingSpinner = ({ size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4"
  };
  
  return (
    <div className="flex justify-center items-center p-4">
      <span 
        className={`loader ${sizeClasses[size]} border-primary border-b-transparent`} 
        aria-label="Carregando..."
      />
    </div>
  );
};

export default LoadingSpinner;
