import { REPO_HOME_FEATURES } from "../../../content/features";
import { FadeIn } from "../home-shared/FadeIn";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function RepoFeatures() {
  return (
    <FadeIn className="py-16 md:py-24 lg:py-32">
      <FeaturesBento
        header="为什么使用 Turborepo?"
        body="Turborepo 重新构想了 Facebook 和 Google 使用的构建系统技术，以消除维护负担和开销。"
        features={REPO_HOME_FEATURES}
      />
    </FadeIn>
  );
}
