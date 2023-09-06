import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin Successfully reated");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
