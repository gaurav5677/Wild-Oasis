import { useQueries } from "@tanstack/react-query";
import getSettings from "../../services/apiSettings";

export function useSetting() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQueries({ querykey: ["settings"], queryfn: getSettings });

  return { isLoading, error, settings };
}
