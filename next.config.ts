import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";
import { COMPONENTS } from "@/shared/navigation-config";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["lucide-react", "@icons-pack/react-simple-icons"],
  },
  redirects: async () => {
    return [
      {
        source: "/docs",
        destination: COMPONENTS[0].path,
        permanent: false,
      },
      {
        source: "/docs/components",
        destination: COMPONENTS[0].path,
        permanent: false,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
