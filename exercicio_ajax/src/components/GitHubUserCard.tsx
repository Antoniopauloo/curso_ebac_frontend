
import { GitHubUser } from "@/services/api";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Link as LinkIcon, MapPin, Mail, FileText, GitBranch } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GitHubUserCardProps {
  user: GitHubUser;
}

const GitHubUserCard = ({ user }: GitHubUserCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-20 w-20 border">
          <AvatarImage src={user.avatar_url} alt={user.login} />
          <AvatarFallback>{user.login.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{user.name || user.login}</CardTitle>
          <CardDescription className="text-base">@{user.login}</CardDescription>
          {user.bio && <p className="text-sm text-muted-foreground mt-1">{user.bio}</p>}
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {user.company && (
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{user.company}</span>
          </div>
        )}
        {user.blog && (
          <div className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4 text-muted-foreground" />
            <a href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-sm text-primary hover:underline">
              {user.blog}
            </a>
          </div>
        )}
        {user.location && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{user.location}</span>
          </div>
        )}
        {user.email && (
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{user.email}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{user.public_repos} repositórios públicos</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{user.followers} seguidores · Seguindo {user.following}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => window.open(user.html_url, "_blank")}
        >
          <GitBranch className="h-4 w-4 mr-2" />
          Visitar Perfil no GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GitHubUserCard;
