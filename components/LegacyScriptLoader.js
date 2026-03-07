"use client";

import { useEffect } from "react";

function removeLegacyArtifacts(scriptId) {
  document
    .querySelectorAll(`[data-legacy-script-group="${scriptId}"]`)
    .forEach((element) => element.remove());

  document.querySelectorAll("#sketch-container canvas").forEach((canvas) => canvas.remove());
}

export default function LegacyScriptLoader({
  externalScripts = [],
  inlineScript = "",
  scriptId,
}) {
  useEffect(() => {
    let cancelled = false;

    async function runScripts() {
      removeLegacyArtifacts(scriptId);

      for (const source of externalScripts) {
        if (cancelled) {
          return;
        }

        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = source;
          script.async = false;
          script.dataset.legacyScriptGroup = scriptId;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Failed to load script: ${source}`));
          document.body.appendChild(script);
        });
      }

      if (cancelled || !inlineScript.trim()) {
        return;
      }

      const script = document.createElement("script");
      script.dataset.legacyScriptGroup = scriptId;
      script.text = inlineScript;
      document.body.appendChild(script);
    }

    runScripts().catch((error) => {
      console.error(error);
    });

    return () => {
      cancelled = true;
      removeLegacyArtifacts(scriptId);
    };
  }, [externalScripts, inlineScript, scriptId]);

  return null;
}
