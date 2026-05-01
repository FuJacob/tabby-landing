type GithubStarLabelProps = {
  starsLabel: string | null;
};

export function GithubStarLabel({ starsLabel }: GithubStarLabelProps) {
  return (
    <span>{starsLabel ? `${starsLabel} on GitHub` : "Star on GitHub"}</span>
  );
}
