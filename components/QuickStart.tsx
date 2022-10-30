import {
  BookOpenIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  LightBulbIcon,
  LightningBoltIcon,
  PencilIcon,
  ServerIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";
import Turbo from "./logos/Turbo";

export const QuickStartArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: PencilIcon,
          description: `在几分钟内将 Turborepo 添加到任何 JavaScript 或 TypeScript 项目。`,
          name: "添加到已有项目",
        }}
        href="/repo/docs/getting-started/add-to-project"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: SparklesIcon,
          description: `使用由 Turborepo 提供支持的共享包构建全新的 monorepo。`,
          name: "创建一个新的 monorepo",
        }}
        href="/repo/docs/getting-started/create-new"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `将 Turborepo 逐步添加到您现有的 monorepo 代码库中。`,
          name: "添加到已有的 monorepo 项目中",
        }}
        href="/repo/docs/getting-started/existing-monorepo"
      ></DetailedFeatureLink>
    </div>
  );
};

export const MonoreposArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: LightBulbIcon,
          description: `了解为什么 monorepos 不能扩展 - 以及为什么 Turborepo 是解决方案。`,
          name: "为什么是 Turborepo?",
        }}
        href="/repo/docs/core-concepts/monorepos"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BookOpenIcon,
          description: `在深入了解 Turborepo 之前了解 monorepos 的基础知识。`,
          name: "阅读 Monorepo 手册",
        }}
        href="/repo/docs/handbook"
      ></DetailedFeatureLink>
    </div>
  );
};

export const LearnMoreArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CloudUploadIcon,
          description: `Turborepo 会记录您运行的任何任务的输出 - 并且可以跳过已经完成的工作。`,
          name: "永远不要两次做同样的工作",
        }}
        href="/repo/docs/core-concepts/caching"
      />
      <DetailedFeatureLink
        feature={{
          Icon: LightningBoltIcon,
          description: `您运行任务的方式可能没有优化。 Turborepo 通过智能调度加速它们，最大限度地减少空闲 CPU。`,
          name: "最优多任务处理",
        }}
        href="/repo/docs/core-concepts/running-tasks"
      ></DetailedFeatureLink>
    </div>
  );
};
