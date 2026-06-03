import ProjectCard from './ProjectCard';

const GitHubRepoCard = ({ repo, index, onViewDetails }) => {
  return <ProjectCard repo={repo} index={index} onViewDetails={onViewDetails} />;
};

export default GitHubRepoCard;
