import type Image from "next/future/image";
import EcosystemIconDark from "../public/images/docs/shared/feature-icons/ecosystem-dark.svg";
import EcosystemIconLight from "../public/images/docs/shared/feature-icons/ecosystem-light.svg";
import LightningIconDark from "../public/images/docs/shared/feature-icons/lightning-dark.svg";
import LightningIconLight from "../public/images/docs/shared/feature-icons/lightning-light.svg";
import BarsIconDark from "../public/images/docs/shared/feature-icons/bars-dark.svg";
import BarsIconLight from "../public/images/docs/shared/feature-icons/bars-light.svg";
import MultiEnvTargetsIconDark from "../public/images/docs/shared/feature-icons/multi-env-targets-dark.svg";
import MultiEnvTargetsIconLight from "../public/images/docs/shared/feature-icons/multi-env-targets-light.svg";
import NextJSIconDark from "../public/images/docs/shared/feature-icons/nextjs-dark.svg";
import NextJSIconLight from "../public/images/docs/shared/feature-icons/nextjs-light.svg";
import ServerComponentsIconDark from "../public/images/docs/shared/feature-icons/server-components-dark.svg";
import ServerComponentsIconLight from "../public/images/docs/shared/feature-icons/server-components-light.svg";
import FingerprintIconDark from "../public/images/docs/shared/feature-icons/fingerprint-dark.svg";
import FingerprintIconLight from "../public/images/docs/shared/feature-icons/fingerprint-light.svg";
import CloudIconDark from "../public/images/docs/shared/feature-icons/cloud-dark.svg";
import CloudIconLight from "../public/images/docs/shared/feature-icons/cloud-light.svg";
import CpuIconDark from "../public/images/docs/shared/feature-icons/cpu-dark.svg";
import CpuIconLight from "../public/images/docs/shared/feature-icons/cpu-light.svg";
import PieconDark from "../public/images/docs/shared/feature-icons/piecon-dark.svg";
import PieconLight from "../public/images/docs/shared/feature-icons/piecon-light.svg";
import RefreshIconDark from "../public/images/docs/shared/feature-icons/refresh-dark.svg";
import RefreshIconLight from "../public/images/docs/shared/feature-icons/refresh-light.svg";
import ArrowsExpandIconDark from "../public/images/docs/shared/feature-icons/arrows-expand-dark.svg";
import ArrowsExpandIconLight from "../public/images/docs/shared/feature-icons/arrows-expand-light.svg";
import BeakerIconDark from "../public/images/docs/shared/feature-icons/beaker-dark.svg";
import BeakerIconLight from "../public/images/docs/shared/feature-icons/beaker-light.svg";

type NextImageSrc = Parameters<typeof Image>[0]["src"];

export type Feature = {
  name: string;
  description: string;
  iconDark: NextImageSrc;
  iconLight: NextImageSrc;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;

const REPO_FEATURES: Features = [
  {
    name: "????????????",
    description: `??????????????????????????????Turborepo ???????????????????????????????????????????????????????????????`,
    iconDark: RefreshIconDark,
    iconLight: RefreshIconLight,
    page: "all",
  },
  {
    name: "???????????? Hash",
    description: `Turborepo ???????????????????????????????????????????????????????????????????????????`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "????????????",
    description: `????????????????????? cpu ????????????????????????????????????????????????????????????`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "????????????",
    description: `?????????????????? CI/CD ??????????????????????????????????????????????????????`,
    iconDark: CloudIconDark,
    iconLight: CloudIconLight,
    page: "all",
  },
  {
    name: "??????????????????",
    description: `Turborepo ???????????????????????????????????? sourcemap???`,
    iconDark: CpuIconDark,
    iconLight: CpuIconLight,
    page: "all",
  },
  {
    name: "????????????",
    description: `?????????????????????????????????????????????????????? monorepo ?????????????????? PaaS ?????????`,
    iconDark: PieconDark,
    iconLight: PieconLight,
    page: "all",
  },
  {
    name: "????????????",
    description: `??????????????????????????????????????? Turborepo ??????????????????????????????`,
    iconDark: ArrowsExpandIconDark,
    iconLight: ArrowsExpandIconLight,
    page: "all",
  },
  {
    name: "????????????????????????",
    description: `?????? Lerna??? ?????????????????????????????????????????? Turborepo ????????????????????????`,
    iconDark: BeakerIconDark,
    iconLight: BeakerIconLight,
    page: "home",
  },
  {
    name: `??????????????????`,
    description: `??????????????????????????????????????? Chrome ??? Edge????????????????????????????????????????????????`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "home",
  },
];

const PACK_FEATURES: Features = [
  {
    name: "????????????",
    description: `????????????????????????????????? Turbopack ???????????????????????????????????????????????????????????? `,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "all",
  },
  {
    name: "?????????????????????",
    description: `??? TypeScript???JSX???CSS???CSS Module???WebAssembly ????????????????????????`,
    iconDark: EcosystemIconDark,
    iconLight: EcosystemIconLight,
    page: "home",
  },
  {
    name: "????????? HMR",
    description: `??????????????????????????????????????????????????????????????????HMR?????????`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "React Server Components",
    description: `Turbopack ???????????? React Server Components`,
    iconDark: ServerComponentsIconDark,
    iconLight: ServerComponentsIconLight,
    page: "all",
  },
  {
    name: "??????????????????????????????",
    description: `????????????????????????????????????????????? (Browser, Server, Edge, SSR, React Server Components).`,
    iconDark: MultiEnvTargetsIconDark,
    iconLight: MultiEnvTargetsIconLight,
    page: "all",
  },
  {
    name: "?????? Next.js",
    description: `Turbopack ??????????????????????????? Next.js ???????????????????????????`,
    iconDark: NextJSIconDark,
    iconLight: NextJSIconLight,
    page: "all",
  },
];
export const REPO_DOCS_FEATURES = REPO_FEATURES.filter(
  (f) => f.page === "docs" || f.page === "all"
);

export const REPO_HOME_FEATURES = REPO_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

export const PACK_HOME_FEATURES = PACK_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);
