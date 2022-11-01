import { DetailedFeatureLink } from "./Feature"
import { GitHubIcon } from "./Icons"

export const ExamplesArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: `用于学习的最小 Turborepo 示例。`,
          name: "基本的",
        }}
        href="https://github.com/vercel/turbo/tree/main/examples/basic"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description:
            "通过在多个应用程序之间共享设计系统来统一您网站的外观。",
          name: "设计系统",
        }}
        href="https://github.com/vercel/turbo/tree/main/examples/design-system"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description:
            "了解如何与流行的 CSS 框架 Tailwind 集成。",
          name: "集成 Tailwind CSS",
        }}
        href="https://github.com/vercel/turbo/tree/main/examples/with-tailwind"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description:
            "想看一个超级复杂的组合示例吗？ 包括多个框架，以及前端和后端。",
          name: "复杂示例",
        }}
        href="https://github.com/vercel/turbo/blob/main/examples/kitchen-sink"
      ></DetailedFeatureLink>
    </div>
  )
}
