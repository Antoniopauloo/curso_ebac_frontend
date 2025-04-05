
import { useState } from "react";
import { fetchGitHubUser, type GitHubUser } from "@/services/api";
import SearchField from "@/components/SearchField";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";
import Header from "@/components/Header";
import { useToast } from "@/components/ui/use-toast";
import { Users, GitBranch, ExternalLink } from "lucide-react";

const Index = () => {
  const [githubUser, setGithubUser] = useState<GitHubUser | null>(null);
  const [githubLoading, setGithubLoading] = useState(false);
  const [githubError, setGithubError] = useState<string | null>(null);
  const { toast } = useToast();

  const searchGitHubUser = async (username: string) => {
    setGithubLoading(true);
    setGithubError(null);
    setGithubUser(null);
    
    try {
      const response = await fetchGitHubUser(username);
      
      if (response.error) {
        setGithubError(response.error);
      } else {
        setGithubUser(response.data);
        
        toast({
          title: "Perfil encontrado",
          description: `Exibindo perfil de ${response.data?.name || username} no GitHub`,
        });
      }
    } catch (err) {
      setGithubError("Falha ao buscar perfil do GitHub");
      console.error(err);
    } finally {
      setGithubLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      <Header 
        onRefresh={() => {
          if (githubUser) {
            searchGitHubUser(githubUser.login);
          }
        }}
        isLoading={githubLoading}
      />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-blue-800">Pesquisa de Perfil no GitHub</h2>
          <p className="text-blue-600/80">
            Busque e visualize perfis de usuários do GitHub
          </p>
        </div>
        
        <div className="mb-8 max-w-xl mx-auto">
          <SearchField 
            placeholder="Digite um nome de usuário do GitHub..." 
            onSearch={searchGitHubUser}
            isLoading={githubLoading}
            variant="github"
          />
        </div>
        
        {githubError && <ErrorMessage message={githubError} />}
        
        {githubLoading ? (
          <div className="h-60 flex items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        ) : githubUser ? (
          <div className="github-profile max-w-2xl mx-auto">
            <div className="github-profile-header bg-gradient-to-r from-blue-600 to-blue-700">
              <img 
                src={githubUser.avatar_url} 
                alt={githubUser.name || githubUser.login}
                className="w-32 h-32 rounded-full border-4 border-white mb-4 object-cover shadow-md"
              />
              <h2 className="text-2xl font-bold">{githubUser.name || githubUser.login}</h2>
              <p className="text-blue-100 mb-3">@{githubUser.login}</p>
              {githubUser.bio && <p className="text-center text-blue-100 mb-4 max-w-md">{githubUser.bio}</p>}
              <div className="flex gap-4 text-blue-100 mb-4">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{githubUser.followers} seguidores</span>
                </div>
                <div className="flex items-center">
                  <GitBranch className="h-4 w-4 mr-1" />
                  <span>{githubUser.public_repos} repos</span>
                </div>
              </div>
              <a 
                href={githubUser.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-visit-button flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                VISITAR PERFIL
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-b-xl">
              <h3 className="text-xl font-bold text-center mb-6 text-blue-800">
                Repositórios públicos: {githubUser.public_repos}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[...Array(Math.min(9, githubUser.public_repos))].map((_, index) => (
                  <div key={index} className="repo-card border-blue-200">
                    <p className="font-bold text-blue-800">Repositório {index + 1}</p>
                    <p className="text-blue-600 text-sm mb-2">ID: {Math.floor(Math.random() * 900000000) + 100000000}</p>
                    <a 
                      href={githubUser.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-600 hover:bg-blue-700 text-white py-2 text-center rounded-md mt-4 text-sm transition-colors"
                    >
                      Visitar no GitHub
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white/50 backdrop-blur-sm rounded-xl max-w-md mx-auto shadow-sm border border-blue-200/50">
            <Users className="h-16 w-16 mx-auto text-blue-300 mb-4" />
            <p className="text-xl text-blue-700">
              Nenhum perfil para exibir
            </p>
            <p className="text-blue-500 text-sm">
              Digite um nome de usuário do GitHub na caixa de pesquisa acima
            </p>
          </div>
        )}
      </main>
      
      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 py-4 px-6 text-white">
        <div className="container mx-auto text-center text-white/90 text-sm">
          GitHub Explorer - Exercício de requisições Ajax
        </div>
      </footer>
    </div>
  );
};

export default Index;
