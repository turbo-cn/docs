import { PACK_HOME_FEATURES } from "../../../content/features";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function PackFeatures() {
  return (
    <FeaturesBento
      header="为什么使用 Turbopack?"
      body="凭借增量处理和适应性绑定策略，Turbopack 为任何规模的应用程序提供快速灵活的开发体验。"
      features={PACK_HOME_FEATURES}
    />
  );
}
