
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onRefresh: () => void;
  isLoading: boolean;
}

const Header = ({ onRefresh, isLoading }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">GitHub Explorer</h1>
            <p className="text-sm opacity-90 mt-1">Visualização de perfis do GitHub via Ajax</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onRefresh}
              disabled={isLoading}
              className="gap-1 bg-white/10 hover:bg-white/20 border-white/20 text-white transition-all"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Atualizar</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
