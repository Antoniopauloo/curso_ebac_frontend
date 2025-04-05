
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchFieldProps {
  placeholder: string;
  onSearch: (query: string) => void;
  isLoading?: boolean;
  variant?: "default" | "github";
}

const SearchField = ({ 
  placeholder, 
  onSearch, 
  isLoading = false, 
  variant = "default" 
}: SearchFieldProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  if (variant === "github") {
    return (
      <div className="github-search-container mb-6">
        <h3 className="text-white font-semibold mb-3">Nome do usuário:</h3>
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-white/90 border-blue-400/30 focus-visible:ring-blue-400"
          />
          <Button 
            type="submit" 
            disabled={isLoading || !query.trim()}
            className="github-button"
          >
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={isLoading || !query.trim()}>
        <Search className="h-4 w-4 mr-2" />
        Buscar
      </Button>
    </form>
  );
};

export default SearchField;
