import Layout from "@/components/Layout";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/data/modules";
import { getProgress } from "@/lib/gamification";

export default function Modules() {
  const progress = getProgress();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">&gt;</span> Learning Path
          </h1>
          <p className="text-muted-foreground">
            6 modul dari dasar IT hingga cloud security. Selesaikan secara berurutan.
          </p>
          <div className="mt-4 font-mono text-sm text-muted-foreground">
            Progress: {progress.completedModules.length}/{modules.length} modul selesai
          </div>
          <div className="mt-2 h-2 rounded-full bg-secondary max-w-md">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${(progress.completedModules.length / modules.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.id} module={mod} index={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
